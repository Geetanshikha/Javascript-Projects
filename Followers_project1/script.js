//so here we will deal how to get element by query selector
//inside the quesry selector we have put the class name or id name or tag name anything 
//before class name we will put. & before id name we will put #
var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

//now let's see the implementation of setinterval and settimeout

let count = 1;

setInterval(()=>{
     if(count<1000)
     {
        count++;
        counter.innerText = count ;
    }
}, 1);
//here we are using setinterval function which will run the function inside it every 200 millisecond
//here we are checking if the count is less than 1000 if yes then we are increment
//the count by 1 and then we are setting the text of counter element to count variable
//now let's see the implementation of settimeout

setTimeout(()=>{
    followers.innerText = "Followers on Instagram!";
},9500);
//here we are using settimeout function which will run the function inside it after 500 millisecond
//here we are setting the text of follower element to "Followers on Instagram!" string



