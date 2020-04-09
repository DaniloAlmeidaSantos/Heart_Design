import audios from "./data.js";
import { path, secondsToMinutes } from "./utils.js";
import elements from "./playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlayning: 0,
    isPlayning: false,

    start() {
        elements.get.call(this);
        this.update();
    },

    play() {
        this.isPlayning = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },

    pause() {
        this.isPlayning = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },

    togglePlayPause() {
        if (this.isPlayning) {
            this.pause();
        } else {
            this.play();
        }
    },

    toggleMute() {
        this.audio.muted = !this.audio.muted;
        this.mute.innerText = this.audio.muted ? "volume_down" : "volume_up";   
    },

    next() {
        this.currentPlayning++;
        if (this.currentPlayning == this.audioData.length) this.restart();
        this.update();
        this.play();
    },

    setVolume(value) {
        this.audio.volume = value / 100;
    },

    timeUpdate() {
        this.audio.currentAudio = value;
    },
    
    setSeek(value) {
        this.audio.currentTime = value;
    },

    timeUpdate() {
        this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
        this.seekbar.value = this.audio.currentTime;
    },

    update() {
        this.currentAudio = this.audioData[this.currentPlayning];
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file));

        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        };
    },

    restart() {
        this.currentPlayning = 0;
        this.update();
    }
}