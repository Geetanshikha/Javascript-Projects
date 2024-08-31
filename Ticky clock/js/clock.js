//so firstly some variables will be declared 
var h, m, s, d, clock, color;

function clocky(){
    d = new Date();//constructor which is called !
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

//to balance single digits !
if(h<=9)
{
    h='0'+h;
}

if(m<=9)
{
    m='0'+m;
}

if(s<=9)
{
    s='0'+s;
}

clock = h + ":" + m + ":" + s ;
    //this is how the color be equal to for every different hour and time !
color = "#" + h + m + s;
    

document.getElementById("clock").innerHTML=clock;
//based on the time it will change the color 
document.body.style.background = color;

setTimeout(clocky, 1000);
    
}

clocky();