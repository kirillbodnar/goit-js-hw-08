import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const currentVideoTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentVideoTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}
