var HeatMap = (function () {
    function HeatMap(data, colorCode, target) {
	    this.data = data;
	    this.target = target;
	    this.videoData = data.videoTrack.split(',');
	    this.totalLength = data.videoLength;
	    this.div = [];
	    this.colorCode = colorCode || ['rgb(255, 245, 204)','rgb(255, 205, 143)','rgb(255, 155, 97)', 'rgb(255, 81, 46)',
	                        'rgb(255, 0, 0)', 'rgb(226, 0, 0)', 'rgb(191, 2, 2)', 'rgb(156, 1, 1)',
	                        'rgb(125, 2, 2)'];
	    this.viewPattern();
    }

	HeatMap.prototype.viewPattern = function(){
		var inst = this;
		inst.setVideoData();
		inst.draw();
	},

   HeatMap.prototype.draw = function(){
      var inst = this;
      var left,previousWidth = 0, background = '#61d861 ';
      for (var i = 0, j = 0; i < inst.videoData.length; i++) {
        if (inst.videoData[i] == inst.videoData[i+1]) {
          inst.div.push(inst.videoData[i]);
        }
        else{
          inst.div.push(inst.videoData[i]);
          j++;
          if (inst.div[0] != undefined && inst.div[0] != "") {
            if($(".pattern .forward").length == 0){
              left = 0;
            }
            else{
              left = previousWidth;
            }
            background = inst.colorCode[inst.div[0]];
            $("#"+inst.target).append("<div class='forward' style='background:" + background +";width:"+ (inst.div.length * 100)/inst.totalLength +"%;left:"+ left +"%'></div>")
          }
          previousWidth = previousWidth + (inst.div.length * 100)/inst.totalLength;
          inst.div = [];
        }
      }
    },

   	HeatMap.prototype.setVideoData = function(){
		var inst = this;
		if (inst.totalLength > inst.videoData.length) {
			for (var i = inst.videoData.length; i < inst.totalLength; i++) {
			  inst.videoData[i] = undefined;
			};
		}
    }

   	return HeatMap;

}());