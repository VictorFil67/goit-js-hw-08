import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframeVideoElem = document.querySelector('#vimeo-player');

const player = new Player(iframeVideoElem);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
  // console.log(data.seconds);
}
const pauseTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(pauseTime).then(function(seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});