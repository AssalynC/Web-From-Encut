// ===============================
// LOADING SCREEN
// ===============================


const loader = document.getElementById("loader");
const tapText = document.getElementById("tapText");
const music = document.getElementById("music");


window.addEventListener("load",()=>{


    setTimeout(()=>{


        tapText.classList.add("active");


    },3500);


});


tapText.addEventListener("click",()=>{


    // musik mulai

    music.volume = 0.5;

    music.play();


    // loading hilang

    loader.classList.add("hide");


});
// ===============================
// ELEMENT
// ===============================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

// ===============================
// LETTER
// ===============================

const text = `

Web ini dibuat khusus untuk
Cut Ash-syifa Khaira Az-zahra!✨👑

Baek-baek yaa di Aceh!

Selalu berkabar ya, jangan lupa life update!
Karena gua bukan dukun yang bisa tahu isi pikiran 
atau kegiatan lu tanpa dikasih tau 😭👍

Terus.. jaga kesehatan ya! 💖
Kurang-kurangin begadang gak guna ituh!! 🌙
Jangan sampe lu kecapean atau sakit di sana. 🤕
Inget tidur yang cukup, makan jangan nanti-nanti!😾

Aduh apa lagi yaa.. banyak dah pokoknya. 🤯
Intinya, gua tau kok lu dah gede.
Cari temen yang banyak, tapi yang bener! 💥

Kalo ada yang macem-macem, gamparin aja! 🥊💥
Tapi tetep harus ramah yek ma orang 🤍

Take care yaw!
Sehat-sehat encutt,
sukses terus buat semua rencana lu di sana.🚀

JANGAN BENGAL DI ACEH WOYY! 
Btw, di Aceh ada seblak gak? 🍲
Kalo gacoan? 🍜
Dimsum Mentai? 🥟

See U ON TOP!! 🌸✨
🤍
`;

// ===============================
// TYPEWRITER
// ===============================

let index = 0;

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

    else{

        // surat selesai

        setTimeout(()=>{

            document.getElementById(
            "planeContainer"
            ).style.display="block";


        },1000);


    }

}
const plane =
document.querySelector(".plane");


plane.addEventListener("click",()=>{


    plane.classList.add("fly");

    document
    .getElementById("cloudContainer")
    .classList.add("show");

    document
    .getElementById("skyBlur")
    .classList.add("active");

    setTimeout(()=>{

    document
    .getElementById("skyBlur")
    .classList.remove("active");

},3500);

    // tunggu pesawat pergi

    setTimeout(()=>{


        document.getElementById(
        "ending"
        ).style.display="block";

        document.getElementById(
        "replayBtn"
    ).style.display="inline-block";

    document
    .getElementById("replayBtn")
    .classList.add("show");

        document.getElementById(
        "ending"
        ).scrollIntoView({

            behavior:"smooth"

        });


    },4500);



});

// ===============================
// OPEN ENVELOPE
// ===============================

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        letter.classList.add("show");

        letter.scrollIntoView({

            behavior:"smooth"

        });

    },700);

    setTimeout(typeWriter,1200);

});

// ===============================
// FLOATING HEART
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=

    Math.random()*20+18+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,900);
// ===============================
// SPARKLE
// ===============================

function sparkle(){

    const star=document.createElement("div");

    star.className="sparkle";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(sparkle,500);

// ===============================
// REPLAY BUTTON
// ===============================


const replayBtn = document.getElementById("replayBtn");


replayBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


    setTimeout(()=>{

        location.reload();

    },800);


});