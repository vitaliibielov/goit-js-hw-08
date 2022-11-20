import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const lsCurrTime = localStorage.getItem('videoplayer-current-time');

if (lsCurrTime !== null) {
    player.setCurrentTime(lsCurrTime);
}
player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(time) {
    console.log(time);
    localStorage.setItem('videoplayer-current-time', time.seconds);
};




