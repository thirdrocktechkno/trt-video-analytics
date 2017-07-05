# trt-video-analytics

With this library we can track the user events on video player

add this script 

<script type="text/javascript" src="video.js"></script>

# To generate video analytics

var video = new Video('id of video tag');

# Example : 

<video id="myVideo"></div>

var video = new Video('myVideo');

get video track array data

var trackArr = video.trackArr;

video.trackArr = [1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,3,3,3,3,3,3,3,undefined,undefined,undefined,undefinedundefinedundefined,1,1,1,1,1]

video.canplay --> gives the total length of video in seconds

