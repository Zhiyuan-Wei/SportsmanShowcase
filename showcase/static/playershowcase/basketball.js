function showTrophy() {
    if (type_sport == 'basketball') {
        var imagePath = "playershowcase/honors_basketball";

        if (!trophy_clicked) {
            var container = document.getElementById('imageContainer_championship');
            var n = {{championships}};
            var imageUrl = "{% static '' %}" + imagePath + "/championships.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{FMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/FMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_MVP');
            var n = {{MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "80";
                container.appendChild(img);
            }
            var n = {{MVP_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "58";
                container.appendChild(img);
            }
            var n = {{MVP_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_conf_championship');
            var n = {{western_conference_champions}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_conference_champions.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{eastern_conference_champions}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_conference_champions.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_playoff_MVP');
            var n = {{western_playoffs_mvp}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_playoffs_mvp.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "49";
                container.appendChild(img);
            }
            var n = {{eastern_playoffs_mvp}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_playoffs_mvp.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "46";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_stat_leader');
            var n = {{leading_scores}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_scores_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_scores_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_rebounds}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_rebounds_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_rebounds_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40"
                container.appendChild(img);
            }
            var n = {{leading_assists}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_assists_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_assists_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_steals}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_steals_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_steals_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_blocks}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_blocks_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_blocks_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_other_big');
            var n = {{DPOY}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "68";
                container.appendChild(img);
            }
            var n = {{DPOY_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "48";
                container.appendChild(img);
            }
            var n = {{DPOY_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }
            var n = {{rookie_of_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_of_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{all_rookie_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-rookie_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{all_rookie_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-rookie_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{rookie_challenge_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_challenge_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_all_NBA_team');
            var n = {{all_NBA_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{all_NBA_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_NBA_team_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_3.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_all_defensive_team');
            var n = {{all_defensive_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-defensive_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_defensive_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-defensive_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_all_star_vote');
            var n = {{all_star_voting_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_star_voting_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "42";
                container.appendChild(img);
            }
            var n = {{all_star_voting_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_all_star');
            var n = {{western_all_star}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_all-star.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{eastern_all_star}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_all-star.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{AMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/AMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "52";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_in_season_tournament');
            var n = {{in_season_tournament_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/in_season_tournament_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{IMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/IMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{in_season_team}};
            var imageUrl = "{% static '' %}" + imagePath + "/in-season_team.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_ABA');
            var n = {{ABA_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "75";
                container.appendChild(img);
            }
            var n = {{ABA_playoff_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_playoff_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "55";
                container.appendChild(img);
            }
            var n = {{ABA_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{ABA_rookie_of_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_rookie_of_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{all_ABA_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-ABA_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_ABA_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-ABA_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{ABA_all_defensive_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA-all-defensive_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{ABA_all_rookie_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA-all-rookie_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_monthly_best');
            var n = {{monthly_best}};
            var imageUrl = "{% static '' %}" + imagePath + "/monthly_best.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_weekly_best');
            var n = {{weekly_best}};
            var imageUrl = "{% static '' %}" + imagePath + "/weekly_best.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "25";
                container.appendChild(img);
            }
            var n = {{rookie_of_month}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_of_month.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "28";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_other');
            var n = {{Olympic_gold}};
            var imageUrl = "{% static '' %}" + imagePath + "/Olympic_gold.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{slam_dunk_contest_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/slam_dunk_contest_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{3point_contest_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/3point_contest_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "51";
                container.appendChild(img);
            }
            var n = {{skills_challenge_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/skills_challenge_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "47";
                container.appendChild(img);
            }
            var n = {{century_player}};
            var imageUrl = "{% static '' %}" + imagePath + "/century_player.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{hall_of_fame}};
            var imageUrl = "{% static '' %}" + imagePath + "/hall_of_fame.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{sixth_man_of_the_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/sixth_man_of_the_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{most_improved_player}};
            var imageUrl = "{% static '' %}" + imagePath + "/most_improved_player.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{sportsmanship_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsmanship_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{best_manager}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_manager.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{best_coach}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_coach.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{best_teammate}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_teammate.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{hustle_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/hustle_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{FIBA_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/FIBA_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{kennedy_citizenship_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/kennedy_citizenship_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{magic_johnson_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/magic_johnson_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{Naismith_trophy}};
            var imageUrl = "{% static '' %}" + imagePath + "/Naismith_trophy.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{lifetime_achievement_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/lifetime_achievement_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{rematch_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/rematch_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{75_stars}};
            var imageUrl = "{% static '' %}" + imagePath + "/75-stars.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{sportsman_of_year_Laureus}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsman_of_year_Laureus.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{sportsman_of_year_Laureus_nominated}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsman_of_year_Laureus.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }
            var n = {{sportsperson_of_year_SI}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsperson_of_year_SI.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "90";
                container.appendChild(img);
            }
            var n = {{ESPY_male_athlete}};
            var imageUrl = "{% static '' %}" + imagePath + "/ESPY_male_athlete.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{ESPY_NBA}};
            var imageUrl = "{% static '' %}" + imagePath + "/ESPY_NBA.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "35";
                container.appendChild(img);
            }
            trophy_clicked = true;
        }
    }
}

function showTrophyAlignClose() {
    if ("{{type}}" == 'basketball') {
        var imagePath = "playershowcase/honors_basketball";
        if (!trophy_clicked) {
            var container = document.getElementById('imageContainer_championship');
            var n = {{championships}};
            var imageUrl = "{% static '' %}" + imagePath + "/championships.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{FMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/FMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var n = {{MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "80";
                container.appendChild(img);
            }
            var n = {{MVP_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "58";
                container.appendChild(img);
            }
            var n = {{MVP_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }

            var n = {{western_conference_champions}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_conference_champions.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{eastern_conference_champions}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_conference_champions.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var n = {{western_playoffs_mvp}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_playoffs_mvp.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "49";
                container.appendChild(img);
            }
            var n = {{eastern_playoffs_mvp}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_playoffs_mvp.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "46";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_stat_leader');
            var n = {{leading_scores}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_scores_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_scores_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_scores.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_rebounds}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_rebounds_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_rebounds_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_rebounds.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40"
                container.appendChild(img);
            }
            var n = {{leading_assists}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_assists_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_assists_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_assists.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_steals}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_steals_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_steals_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_steals.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }
            var n = {{leading_blocks}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{leading_blocks_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{leading_blocks_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/leading_blocks.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "40";
                container.appendChild(img);
            }

            var n = {{DPOY}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "68";
                container.appendChild(img);
            }
            var n = {{DPOY_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "48";
                container.appendChild(img);
            }
            var n = {{DPOY_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/DPOY.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }
            var n = {{rookie_of_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_of_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{all_rookie_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-rookie_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{all_rookie_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-rookie_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }
            var n = {{rookie_challenge_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_challenge_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "65";
                container.appendChild(img);
            }

            var n = {{all_NBA_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{all_NBA_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_NBA_team_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-NBA_team_3.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var n = {{all_defensive_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-defensive_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_defensive_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-defensive_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var container = document.getElementById('imageContainer_all_star_vote');
            var n = {{all_star_voting_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_star_voting_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "42";
                container.appendChild(img);
            }
            var n = {{all_star_voting_3}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-star_voting.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }

            var n = {{western_all_star}};
            var imageUrl = "{% static '' %}" + imagePath + "/western_all-star.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{eastern_all_star}};
            var imageUrl = "{% static '' %}" + imagePath + "/eastern_all-star.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{AMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/AMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "52";
                container.appendChild(img);
            }

            var n = {{in_season_tournament_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/in_season_tournament_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{IMVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/IMVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{in_season_team}};
            var imageUrl = "{% static '' %}" + imagePath + "/in-season_team.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var n = {{ABA_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "75";
                container.appendChild(img);
            }
            var n = {{ABA_playoff_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_playoff_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "55";
                container.appendChild(img);
            }
            var n = {{ABA_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{ABA_rookie_of_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA_rookie_of_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{all_ABA_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-ABA_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{all_ABA_team_2}};
            var imageUrl = "{% static '' %}" + imagePath + "/all-ABA_team_2.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{ABA_all_defensive_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA-all-defensive_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{ABA_all_rookie_team_1}};
            var imageUrl = "{% static '' %}" + imagePath + "/ABA-all-rookie_team_1.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }

            var n = {{monthly_best}};
            var imageUrl = "{% static '' %}" + imagePath + "/monthly_best.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }
            var n = {{weekly_best}};
            var imageUrl = "{% static '' %}" + imagePath + "/weekly_best.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "25";
                container.appendChild(img);
            }
            var n = {{rookie_of_month}};
            var imageUrl = "{% static '' %}" + imagePath + "/rookie_of_month.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "28";
                container.appendChild(img);
            }

            var n = {{Olympic_gold}};
            var imageUrl = "{% static '' %}" + imagePath + "/Olympic_gold.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{slam_dunk_contest_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/slam_dunk_contest_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "60";
                container.appendChild(img);
            }
            var n = {{3point_contest_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/3point_contest_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "51";
                container.appendChild(img);
            }
            var n = {{skills_challenge_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/skills_challenge_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "47";
                container.appendChild(img);
            }
            var n = {{century_player}};
            var imageUrl = "{% static '' %}" + imagePath + "/century_player.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{hall_of_fame}};
            var imageUrl = "{% static '' %}" + imagePath + "/hall_of_fame.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{sixth_man_of_the_year}};
            var imageUrl = "{% static '' %}" + imagePath + "/sixth_man_of_the_year.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{most_improved_player}};
            var imageUrl = "{% static '' %}" + imagePath + "/most_improved_player.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{sportsmanship_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsmanship_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{best_manager}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_manager.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{best_coach}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_coach.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{best_teammate}};
            var imageUrl = "{% static '' %}" + imagePath + "/best_teammate.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{hustle_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/hustle_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{FIBA_championship}};
            var imageUrl = "{% static '' %}" + imagePath + "/FIBA_championship.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{kennedy_citizenship_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/kennedy_citizenship_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{magic_johnson_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/magic_johnson_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{Naismith_trophy}};
            var imageUrl = "{% static '' %}" + imagePath + "/Naismith_trophy.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{lifetime_achievement_award}};
            var imageUrl = "{% static '' %}" + imagePath + "/lifetime_achievement_award.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{rematch_MVP}};
            var imageUrl = "{% static '' %}" + imagePath + "/rematch_MVP.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{75_stars}};
            var imageUrl = "{% static '' %}" + imagePath + "/75-stars.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{sportsman_of_year_Laureus}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsman_of_year_Laureus.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "70";
                container.appendChild(img);
            }
            var n = {{sportsman_of_year_Laureus_nominated}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsman_of_year_Laureus.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "30";
                container.appendChild(img);
            }
            var n = {{sportsperson_of_year_SI}};
            var imageUrl = "{% static '' %}" + imagePath + "/sportsperson_of_year_SI.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "90";
                container.appendChild(img);
            }
            var n = {{ESPY_male_athlete}};
            var imageUrl = "{% static '' %}" + imagePath + "/ESPY_male_athlete.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "50";
                container.appendChild(img);
            }
            var n = {{ESPY_NBA}};
            var imageUrl = "{% static '' %}" + imagePath + "/ESPY_NBA.png";
            for (var i = 0; i < n; i++) {
                var img = document.createElement('img');
                img.src = imageUrl;
                img.width = "35";
                container.appendChild(img);
            }
            trophy_clicked = true;
        }
    }
}