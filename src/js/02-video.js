import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(findCurrentTime, 1000));

function findCurrentTime(data) {
    const currantTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currantTime); 
    console.log(currantTime);
}
 
const getCurrantTime = localStorage.getItem('videoplayer-current-time');

player
    .setCurrentTime(getCurrantTime)
    .then(function (seconds) { })
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        
        default:
             break;
    }
});