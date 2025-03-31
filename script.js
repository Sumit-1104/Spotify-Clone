console.log('Welcome to Spotify');

// Initization the value
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myproggrasbar = document.getElementById('myproggrasbar'); 
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName:"TRUE LOVE", filePath:"song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"IT'S ALWAYS BLUE", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"TRAP CRATL", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"THEy MAD", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"RICH THE KID", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"SONG TITLE", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"THE SAFETY DANCE", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"BACK IT UP", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"TUNE", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"CLAY", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"}
];

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("Playsong")[0].innerText = songs[i].songName;
});

// handle play/pause click.
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

// listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    
    // update seekbar;
    progres = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myproggrasbar.value = progres;
});

myproggrasbar = audioElement.addEventListener('change',()=>{
    audioElement.currentTime = myproggrasbar.value*audioElement.duration/100;

});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = (e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
});