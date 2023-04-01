let songindex = 1;
let masterplay = document.getElementById('icon1');
let audioElement = new Audio("songs/1.mp3");
let myProgressbar = document.getElementById('container31');
let songitems = Array.from(document.getElementsByClassName('sl1'));
let songs = [
    {songname: "Agar tum saath ho", filepath: "songs/1.mp3", coverpath: "images/1.jpg"},
    {songname: "Gerua", filepath: "songs/2.mp3", coverpath: "images/2.jpg"},
    {songname: "Rasiya", filepath: "songs/3.mp3", coverpath: "images/3.jpg"},
    {songname: "Apna bana le", filepath: "songs/4.mp3", coverpath: "images/4.jpg"},
]

songitems.forEach((element,i) =>{
    element.getElementsByClassName('sl11')[0].innerText = songs[i].songname;
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("icon1");
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('icon1');
        gif.style.opacity = 0;
    }
}) 

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value*audioElement.duration/100;
})

const makeallplays = () =>{
    Array.from(document.getElementsByClassName('fa-regular fa-circle-play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('icon1')
    })
}

Array.from(document.getElementsByClassName('i1')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('i1');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        z1.innerText = songs[songindex-1].songname;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('i1');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('icon3').addEventListener('click', ()=>{
    if (songindex>=4) {
        songindex=1;
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    z1.innerText = songs[songindex-1].songname;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('i1');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('icon2').addEventListener('click', ()=>{
    if (songindex<=0){
        songindex=1;
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    z1.innerText = songs[songindex-1].songname;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('i1');
    masterplay.classList.add('fa-pause-circle');
})