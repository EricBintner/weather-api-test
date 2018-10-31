# weather-api-test

Run:  
$ npm install  
$ gulp

The concept was to mash together 2 publically sharable gifs to indicate weather conditions instead of specific weather icons. This implementation is basic -- it uses the icon unicode number from the JSON and adds two gifs specific to that. Also it finds other weather json data and populates the DOM. Ideally, to be true to the concept, more conditions like temperature could easily be buit on top of this to make even more conditional and specifc gif combinations. 

The code is mostly js with some jQuery to assist with json parsing. Image effects are CSS background overlay styles. Simple node.js build with SCSS and gulp. 

Issues:
- This should have highs and lows for the next 4 days, and the current day should be high, low and current. This specifically should be the JSON parsing daily high/low, currently it is simply looking forwards in 12 hour incraments (should be high/low data not time/temp data for each 12 hour increment after the first. 
- It's in severe need of some better typography, it's ok but I'm still experimenting with the data being included and placed in each item, so the type layout is still very fluid.
- I never intended to put in the dry-humor weather description, but it was super easy to add. This would really work if an array of phrases were associated with each weather type, it could also be more specific with temperatue variables. 


NOTE:
This uses weather and geo location APIs, 
Currently the basic geo-location API throws an error if too many requests are from the same ip address and the code stops, for testing it's best to comment out the geo location JSON and test with the hard coded coordinates (commented in code).
