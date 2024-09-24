let shand=document.querySelector('.sec');
let mhand=document.querySelector('.min');
let hhand=document.querySelector('.hour');
let dis=document.querySelector('#display')
let dayes=document.querySelector('#day')
let button=document.querySelector('#modebtn')
let modebutton=document.querySelector('.modebutton')
let body=document.querySelector('body')
let Mhand=document.querySelector('.Mhand')
let center=document.querySelector('.center')
let Hhand=document.querySelector('.Hhand')
let display=document.querySelector('#display')
let day=document.querySelector('#day')
let light=document.querySelector('#light')
let dark=document.querySelector('#dark')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(
    function(){
        let day=new Date()
        seconds=day.getSeconds()*6;
        minute=day.getMinutes()*6;
        hour=day.getHours()*30+Math.round(minute/12);
        shand.style.transform = "rotate("+seconds+"deg)";
        mhand.style.transform = "rotate("+minute+"deg)";
        hhand.style.transform = "rotate("+hour+"deg)";

        dis.value=day.toLocaleTimeString();
        let a = day.getDay();
        let b = day.getMonth();
        let c = day.getDate();
        dayes.value=days[a]+", "+"  "+months[b]+" "+" "+c;
    },1000
)



const btnstyle = window.getComputedStyle(button);
function act(){
    if(btnstyle.marginLeft==="4px"){
       body.style.backgroundColor="Black"
       button.style.backgroundColor="Black"
       Mhand.style.backgroundColor="White"
       Hhand.style.backgroundColor="White"
       center.style.backgroundColor="White"
       modebutton.style.backgroundColor="White"
       display.style.color="White"
       day.style.color="White"
       light.style.color="White"
       dark.style.color="White"
       button.style.marginLeft="59px"
       dark.style.fontWeight="700"
       light.style.fontWeight="400"
    }
    else if(btnstyle.marginLeft==="59px"){
       body.style.backgroundColor="White"
       button.style.backgroundColor="White"
       Mhand.style.backgroundColor="Black"
       Hhand.style.backgroundColor="Black"
       center.style.backgroundColor="Black"
       modebutton.style.backgroundColor="Black"
       display.style.color="Black"
       day.style.color="Black"
       light.style.color="Black"
       dark.style.color="Black"
       button.style.marginLeft="4px"
       light.style.fontWeight="700"
       dark.style.fontWeight="400"
    }
}


