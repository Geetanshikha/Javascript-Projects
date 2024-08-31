//so here in this project we want to know the bgc color of the elemnet we grab ohk 
//so firstly we will grab all the elements 
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//now we know the global object window we will gonna used it ohk 
//so we will use the getComputedStyle() method to get the computed style of the element
//window has a lot of properties we will use getcomputedstyle ohk out of it 

// console.log(window.getComputedStyle(red).backgroundColor);

// we can also impllement it using method

const getBGcolor=(selectedelement)=>{
    return window.getComputedStyle(selectedelement).backgroundColor;//through this we will get the background color !
}
//here we have printed and call the method !
// console.log(getBGcolor(orange));//we will put the element name to it !

// var orangecolor = getBGcolor(orange);
//now we have add the events to the elements by using addevent listener !
// orange.addEventListener("click", ()=>{
//     center.style.background = orangecolor;
// })
//so in this click is an event then after that what will happen is ()=>{} written in this 
//we have given the task that after that center style background will gonna be changed into orangecolor 
//now we will use method to perform this 

const magiccolor = (element,color)=>{
 return element.addEventListener ("click", ()=>{
    center.style.background = color;
})

}

magiccolor(red,getBGcolor(red));
magiccolor(cyan,getBGcolor(cyan));
magiccolor(violet,getBGcolor(violet));
magiccolor(orange,getBGcolor(orange));
magiccolor(pink,getBGcolor(pink));

//hence this is the method called with the elementand the color we want to pass 
//hence the task done !!