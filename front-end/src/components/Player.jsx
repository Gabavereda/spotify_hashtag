import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';


// formatando segundos 
const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - minutes * 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`
};

const timeInSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);

    return seconds + minutes * 60;
};

const Player = ({
    duration,
    randomIdFromArtist,
    randomId2Artist,
    audio
}) => {

    const audioPlayer = useRef();
    const progressBar = useRef();

    // useRef cria o link e armazena a variavel no current
    // console.log(audioPlayer);

    // variavel de estado
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));

    // variavel da funcao de preencher a barra de progresso
    const durationInSeconds = timeInSeconds(duration);



    // um boleano para validar o player

    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying)
    };

    // tratando a atualização em segundos
    // first o que sera executado > 
    // return quando rederenzar
    //funcao que motiva o useEfect 
    useEffect(() => {
        const itervalId = setInterval(() => {
            if (isPlaying)
                setCurrentTime(formatTime(audioPlayer.current.currentTime));
            // tratamento da barra de seconds
            // pega o seletor > seta> o omodificador
            // pega o player > tempo atua e faz conta 
            progressBar.current.style.setProperty("--_progress",
                (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
            );
        }, 1000);

        return () => {
            clearInterval(itervalId);
        }
    }, [isPlaying]);

    return <div className="player">
        <div className="player__controllers">
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon
                    className="player__icon"
                    icon={faBackwardStep}
                />
            </Link>
            <FontAwesomeIcon
                className="player__icon player__icon--play"
                icon={isPlaying ? faCirclePause : faCirclePlay}
                // validando boleano play
                onClick={() => playPause()}

            />
            <Link to={`/song/${randomId2Artist}`}>
                <FontAwesomeIcon
                    className="player__icon"
                    icon={faForwardStep}
                />
            </Link>
        </div>
        <div className="player__progress">
            <p>{currentTime}</p>
            <div className="player__bar">
                {/* para tratar o playr é necessario criar uma variavel userRef hook
                 criar a funcao para tratar o tempo
                 */}
                <div ref={progressBar} className="player__bar-progress">

                </div>
            </div>
            <p>{duration}</p>
        </div>
        <audio ref={audioPlayer} src={audio}></audio>
    </div>

};

export default Player;