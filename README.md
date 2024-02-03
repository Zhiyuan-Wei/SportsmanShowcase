# SportsmanShowcase

This Django project shows sportpersons' trophies and awards in their career. You can choose which area and which sportsperson you want to see. Areas include football, basketball, american football, baseball, ice hockey, tennis, boxing, F1, golf, sprint, middle-distance, long-distance, swimming, badminton, table tennis and golf. Currently there is only one sportsperson in each area except basketball which has around fifty.

A sample looks like this:
![sample](https://github.com/Zhiyuan-Wei/SportsmanShowcase/assets/120235952/0f763975-51e9-462f-9c05-7cc3bc20a1fe)

You may see some smaller versions of the trophy. A smaller version indicates a 2nd place in a poll or a tournament. Similarly, an even smaller version indicate a 3rd place in a poll or a tournament. I did this because the best many athletes have done in their careers is 2nd or 3rd place, which documents what they have accomplished that might otherwise make them indistinguishable from the average person in the public eye.

To run it, you need to have Python installed. Then you need to install Django and pandas packages. After that you can open command line, go to the path where the project is in (for example: C:\Users\Yourname\SportsmanShowcase). Then run: 

```
py manage.py runserver
```

Finally, you run this address ([http://127.0.0.1:8000/showcase](http://127.0.0.1:8000/showcase)) in your browser. Bingo!


