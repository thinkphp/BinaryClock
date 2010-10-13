var BinaryClock = new Class({
 
        /* constructor of class 
         * 
         * @public
         */
        initialize: function(ID){
               //grab canvas
               this.main_canvas = document.id(ID);
    
               //get context
               this.context = this.main_canvas.getContext('2d');

               //define time
               this.currentTime = new Date();

               //update time!!!
               this._update_time.periodical(1000,this);
        },

        /* 
         * @private
         */
        _toBin: function(nr) {
              var out = [];
              for(var i=5;i>=0;i--) {
                  out.push((nr>>i)&1);        
              }
          return out;
        }.protect(),

        /* 
         * @private
         */
        _update_time: function() {
           this.currentTime = new Date();
           var hours = this.currentTime.getHours(),
               minutes = this.currentTime.getMinutes(),
               seconds = this.currentTime.getSeconds(); 

            var binary_seconds = this._toBin(seconds),
                binary_minutes = this._toBin(minutes),
                binary_hours = this._toBin(hours);

                this._update_canvas(binary_hours, binary_minutes, binary_seconds); 
        },

        /* 
         * @private
         */
         _update_canvas: function(hours, minutes, seconds) {
               this.context.beginPath();
               this.context.fillStyle = "rgb(10,10,10)";  
               this.context.fillRect(0,0,320,240);  

               var pos_h = 5;
                   for(var h=hours.length-1;h>=0;h--) {
                       location_x = 35+pos_h*50; 
                       location_y = 80;
                       if(hours[h] == 1) {
                          this._on(location_x,location_y);
                       } else {
                          this._off(location_x,location_y);
                       }     
                       pos_h -= 1;             
                    }

                var pos_m = 5;
                   for(var m=minutes.length-1;m>=0;m--) {
                       location_x = 35+pos_m*50; 
                       location_y = 130;
                       if(minutes[m] == 1) {
                          this._on(location_x,location_y);
                       } else {
                          this._off(location_x,location_y);
                       }     
                       pos_m -= 1;             
                    }

                 var pos_s = 5;
                    for(var k=seconds.length-1;k>=0;k--){
                        location_x = 35+pos_s*50; 
                        location_y = 170;
                        if(seconds[k] == 1) {
                           this._on(location_x,location_y);
                        } else {
                           this._off(location_x,location_y);
                        }     
                        pos_s -= 1;  
                     }                
        }.protect(),

        /* 
         * @private
         */
        _on: function(x,y) {
                 this.context.beginPath();
                 this.context.fillStyle="rgb(10,150,10)";
                 this.context.arc(x,y,15,0,Math.PI*2,true); 
                 this.context.fill();
                 this.context.closePath();
        }.protect(),

        /* 
         * @private
         */
        _off: function(x,y) {
                 this.context.beginPath();
                 this.context.strokeStyle="rgb(10,150,10)";
                 this.context.arc(x,y,15,0,Math.PI*2,true); 
                 this.context.stroke();
                 this.context.closePath();
        }.protect()

});//end class BinaryClock

