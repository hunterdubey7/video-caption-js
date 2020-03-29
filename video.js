let vid;
document.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('btnPlay').addEventListener('click', play);
    document.getElementById('btnPaws').addEventListener('click', paws);
    document.getElementById('btnStop').addEventListener('click', stop);
    document.getElementById('btnRew').addEventListener('click', rew);
    document.getElementById('btnFF').addEventListener('click', ff);
    vid = document.getElementById('video');
    console.log(vid);
    console.log({ vid })
    let mediaType = vid.type;
    let str = vid.canPlayType("video/mp4");
    console.log(str);
    vid.volume = 0.9;  //  0 - 1
}

function play(ev) {
    vid.play()
        .then(() => {
            console.log('video is playing')
        })
        .catch((err) => {
            console.log({ err });
        });
    //after the video starts to play you can access text tracks
    let tt = vid.textTracks;
    let cues = tt[0].cues;
    console.log(tt);
    console.log(`There are ${tt.length} text tracks`);
    console.log(tt[0]);
    console.log(cues);
    console.log(cues.length);
    console.log(cues[0]);
    console.log(cues[0].text);
}
function paws(ev) {
    vid.pause();
    console.log(vid.currentTime, "of", vid.duration, "seconds played");
    console.log('video is paused. No Promise here');
}
function stop(ev) {
    vid.pause();
    console.log(vid.currentTime);
    vid.currentTime = 0;
}
function rew(ev) {
    console.log(vid.currentTime);
    if (!vid.fastSeek) {
        vid.currentTime -= 20;
    } else {
        vid.fastSeek(-20)
            .then(() => {
                console.log('Video skipped forward 10 seconds')
            })
            .catch(err => {
                console.log({ err });
            })
    }
    console.log(vid.currentTime);
}
function ff(ev) {
    console.log(vid.currentTime);
    if (!vid.fastSeek) {
        vid.currentTime += 20;
    } else {
        vid.fastSeek(20)
            .then(() => {
                console.log('Video skipped forward 10 seconds')
            })
            .catch(err => {
                console.log({ err });
            })
    }
    console.log(vid.currentTime);
}