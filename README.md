BinaryClock
======================

Binary clock

![Screenshot]()

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
