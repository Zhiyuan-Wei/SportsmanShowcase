from django.shortcuts import render
import pandas as pd
from django.views import generic
from typing import Any
from django.http import JsonResponse

# Create your views here.

class HomeView(generic.View):
    template_name = "showcase/showcase.html"

    def get(self, request, *args, **kwargs):
        type_sport = self.request.GET.get("type_sport", "football")
        context = {'type': type_sport}
        stat_dict = {'basketball':20, 'sprint':8, 'middle_distance':4, 
                    'long_distance':4, 'swimming':6}
        section_index_dict = {'football':[0,22,26,39,83,103,115], 'basketball':[0,12,39,56], 'american_football':[0,12,36,37], 'baseball':[0,12,39,46], 'ice_hockey':[0,19,34,41], 
                    'tennis':[0,8,28,40,42], 'boxing':[0,17], 'snooker':[0,6], 'F1':[0,1,2], 'sprint':[0,17], 'middle_distance':[0,17], 
                    'long_distance':[0,30], 'swimming':[0,13], 'badminton':[0,33,41], 'table_tennis':[0,33,37], 'golf':[0,8,22,24]}
        default_name_dict = {'football': "Lionel Messi", 'basketball': "Michael Jordan", 'american_football': "Tom Brady", 'baseball': "Babe Ruth", 'ice_hockey': "Wayne Gretzky", 
                    'tennis': "Roger Federer", 'boxing': "Muhammad Ali", 'snooker': "Ronnie O'Sullivan", 'F1': "Michael Schumacher", 'sprint': "Usain Bolt", 'middle_distance': "El Guerrouj", 
                    'long_distance': "Kenenisa Bekele", 'swimming': "Michael Phelps", 'badminton': "Lin Dan", 'table_tennis': "Ma Long", 'golf': "Tiger Woods"}

        df = pd.read_csv(type_sport + '.csv')
        number_of_personal_info = 8
        stat_list = []
        image_name = []
        image_size = []
        personal_info_list = list(df.columns[:number_of_personal_info])
        if type_sport in stat_dict:
            stat_list = list(df.columns[-stat_dict[type_sport]:])
            image_name = list(df.iloc[0][number_of_personal_info:-len(stat_list)])
            image_size = list(df.iloc[1][number_of_personal_info:-len(stat_list)])
        else:
            image_name = list(df.iloc[0][number_of_personal_info:])
            image_size = list(df.iloc[1][number_of_personal_info:])
        for i in range(len(image_size)):
            image_size[i] = int(image_size[i])
        section_index = section_index_dict[type_sport]
        name = self.request.GET.get("player", default_name_dict[type_sport])
        name_list = list(df['name'][2:])
        if name not in name_list:
            name = default_name_dict[type_sport]
        context['image_url'] = 'playershowcase/players_' + type_sport + '/' + name + '.png'
        context['image_name'] = image_name
        context['image_size'] = image_size
        context['section_index'] = section_index
        
        context['name_list'] = name_list
        df = df[df['name'] == name].iloc[0]
        if type_sport in stat_dict:
            honor_number = list(df[number_of_personal_info:-len(stat_list)])
        else:
            honor_number = list(df[number_of_personal_info:])
        for i in range(len(honor_number)):
            if pd.isna(honor_number[i]):
                honor_number[i] = 0
            else:
                honor_number[i] = int(honor_number[i])
        context['honor_number'] = honor_number
        
        for i in stat_list:
            if pd.isna(df[i]):
                context[i] = -1
            else:
                context[i] = df[i]

        for i in personal_info_list:
            if pd.isna(df[i]):
                context[i] = -1
            elif type(df[i]) is not str:
                context[i] = int(df[i])
            else:
                context[i] = df[i]
        

        if type_sport == 'basketball':
            team_start = {
                'celtics':1946, 'warriors':1946, 'knicks':1946, 'lakers':1948, 'kings':1948, 'pistons':1948, 
                '76ers':1949, 'hawks':1949, 'wizards':1961, 'bulls':1966, 'thunder':1967, 'rockets':1967, 
                'bucks':1968, 'suns':1968, 'cavaliers':1970, 'trailblazers':1970, 'clippers':1970, 'jazz':1974,
                'spurs':1976, 'nets':1976, 'nuggets':1976, 'pacers':1976, 'mavericks':1980, 'hornets':1988,
                'heat':1988, 'timberwolves':1989, 'magic':1989, 'raptors':1995, 'grizzlies':1995, 'pelicans':2002
                }
            team_end = {'bullets':[1947,1955], 'stags':[1946,1950]}

            team_img_url_list = []
            team_img_url_list_2 = []

            for i in team_start:
                if team_start[i] <= df['start_year']:
                    team_img_url_list.append('playershowcase/teams_basketball/'+i+'.png')
                if team_start[i] > df['start_year'] and team_start[i] < df['end_year']:
                    team_img_url_list_2.append('playershowcase/teams_basketball/'+i+'.png')

            for i in team_end:
                if (team_end[i][1] < df['end_year'] and team_end[i][1] > df['start_year']) or (team_end[i][0] > df['start_year'] and team_start[i][0] < df['end_year']):
                    team_img_url_list_2.append('playershowcase/teams_basketball/'+i+'.png')
                if team_end[i][0] <= df['start_year'] and team_end[i][1] >= df['end_year']:
                    team_img_url_list.append('playershowcase/teams_basketball/'+i+'.png')
            context['team_img_url_list'] = team_img_url_list
            context['team_img_url_list_2'] = team_img_url_list_2

            country_img_url_list = []
            country_img_url_list_2 = []
            country_dict = {
                'United_States':1946, 'Canada': 1946, 'Argentina': 2002, 'Spain': 2001, 'France': 2000, 'Serbia': 1989, 'Slovenia': 1998, 
                'Australia': 2000, 'Brazil': 2002, 'Russia': 2001, 'Greece': 2000, 'Italy': 1990, 'Croatia': 1989, 'Nigeria': 1984, 
                'China': 2001, 'Mexico': 2000, 'Germany': 1998, 'United_Kingdom': 1980, 'Netherlands': 1976, 'Poland': 2007, 
                'Puerto_Rico': 2001, 'Dominican_Republic': 1998, 'Jamaica': 1985, 'Turkey': 2000, 'Czech_Republic': 1995, 'Ireland': 1991, 
                'Japan': 2018, 'Ukraine': 1996, 'United_States_Virgin_Islands': 1997, 'Venezuela': 1991, 'Philippines': 2005, 'Senegal': 2001, 
                'Israel': 1999, 'Lebanon': 1988, 'Finland': 2017, 'Belgium': 2004, 'Georgia': 2002, 
                'Bahamas': 2008, 'Belize': 1998, 
                'Bosnia_and_Herzegovina': 1999, 'Bulgaria': 1996, 'Cameroon': 2001, 
                'Democratic_Republic_of_the_Congo': 1991, 
                'Latvia': 2004, 'Lithuania': 1989, 
                'Montenegro': 2001, 'North_Macedonia': 1998, 'Panama': 1984, 
                'South_Sudan': 2019, 
            }
            for i in country_dict:
                if country_dict[i] <= df['start_year']:
                    country_img_url_list.append('playershowcase/flags/'+i+'.png')
                if country_dict[i] > df['start_year'] and (country_dict[i] < df['end_year']):
                    country_img_url_list_2.append('playershowcase/flags/'+i+'.png')
            context['country_img_url_list'] = country_img_url_list
            context['country_img_url_list_2'] = country_img_url_list_2

        return render(request, "showcase/showcase.html", context)
