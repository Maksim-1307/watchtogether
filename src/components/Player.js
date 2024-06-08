import { useState } from 'react';
import YouTube from 'react-youtube'

function Player () {

    const [player, setPlayer] = useState();

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const playVideo = () => {
        player.playVideo();
    }


    // Функция, которая будет вызываться после загрузки API
    function loadPlayer() {
        // Создаем новый плеер
        player = new YouTube.Player('player', {
            height: '360',
            width: '640',
            videoId: 'rcnlV_Fhy3o', // Замените VIDEO_ID на ID видео, которое хотите воспроизвести
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'showinfo': 0,
                'rel': 0,
                'iv_load_policy': 3
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // Функция, которая будет вызываться при готовности плеера
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // Функция, которая будет вызываться при изменении состояния плеера
    function onPlayerStateChange(event) {
        if (event.data == YouTube.PlayerState.ENDED) {
            // Видео завершилось, выполните действия, если нужно
        }
    }

    function setPlayerTime(time){
        if (player) {
            player.seekTo(time, true);
        } else {
            return false;
        }
    }


    return (
    <div>
        <div id="player"></div>
        <YouTube videoId="rcnlV_Fhy3o" onReady={onReady} />

        <button onClick={playVideo}></button>
        <button onClick={() => {setPlayerTime(55)}}>set time to 5</button>

        <script>
            
        </script>
    </div>
    );
}

export default Player;