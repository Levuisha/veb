const images=document.querySelectorAll("img");

const podaci=[
    {
        title: "Madjarska",
        url: "pages/madjarska.html",
        audio: new Audio('muzika/hu.ogg')
    },
    {
        title:"Rumunija",
        url: "pages/rumunija.html",
        audio: new Audio('muzika/ru.ogg')
    },
    {
        title:"Hrvatska",
        url: "pages/hrvatska.html",
        audio:new Audio('muzika/cro.ogg')
    },
    {
        title:"Bosna i Hercegovina",       
        url: "pages/bih.html",
        audio:new Audio('muzika/bh.ogg')
    },
    {
        title:"Srbija",
        url: "pages/srbija.html",
        audio:new Audio('muzika/srb.mp3')
    },
    {
        title:"Crna Gora",
        url: "pages/crnagora.html",
        audio:new Audio("muzika/cg.mp3")
    },
    {
        title:"Bugarska",
        url: "pages/bugarska.html",
        audio:new Audio("muzika/bg.mp3")
    },
    {
        title:"Albanija",
        url: "pages/albanija.html",
        audio:new Audio("muzika/al.ogg")
    },
    {
        title:"Makedonija",
        url: "pages/makedonija.html",
        audio:new Audio("muzika/mkd.ogg")
    }
]

for(let i=0;i<images.length;i++){
    images[i].addEventListener('mouseover',()=>{
        podaci[i].audio.play();
    })
    images[i].addEventListener('mouseleave',()=>{
        podaci[i].audio.pause();
        podaci[i].audio.currentTime=0;
    })
    images[i].addEventListener('click',()=>{
        open(podaci[i].url,podaci[i].title,"width=300, height=200");
    })
}