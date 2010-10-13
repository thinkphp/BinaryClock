BinaryClock
======================

Binary clock

![Screenshot](http://farm5.static.flickr.com/4031/5078844863_bffbee21b2_b.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document:

            #HTML
            <script type="text/javascript" src="mootools.js"></script>
            <script type="text/javascript" src="BinaryClock.js"></script>

In your JS:
          
           #JS
           window.addEvent('domready',function(){
               new BinaryClock('mycanvas'); 
           });  

In your HTML body:

           #HTML
           <canvas id="mycanvas" height="240" width="320"></canvas>
