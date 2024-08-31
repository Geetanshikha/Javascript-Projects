//here we willlearn how to create elements and textnodes and to access them for some operations 
const course =[
    {
        name:"JS Course",
        price: "1.3"
    },
    {
        name:"C++ Course",
        price: "5.3"
    },
    {
        name:"Django Course",
        price: "7.3"
    },
    {
        name:"AWS Course",
        price: "2.3"
    },
    {
        name:"React Course",
        price: "9.3"
    },
];


function generateList(){
      const ul=document.querySelector("ul")
      //to remove the duplicate entries 
      ul.innerHTML=""
      course.forEach(course => {
          //here wehave created list element
        const li=document.createElement("li");
        //here we have added the class to the list 
        li.classList.add("list-group-item")
        //here we have created textnode and added the text to the textnode
        const name=document.createTextNode(course.name)
        //here we have addend the name with the list 
        li.appendChild(name);

        //now we will create span element 
        const span = document.createElement("span")
        //now we add class to the span 
        span.classList.add("float-right")
        //now we create textnode and add the price to the textnode
        const price = document.createTextNode("$" + course.price)
        //now we add the price to the span
        span.appendChild(price);

        //here we have added span to the list 
        li.appendChild(span);
        //now we add the list to the ul
        ul.appendChild(li);

      });

    }
    // generateList();
    //another way to diaply list 
    window.addEventListener( "load" , generateList )//only reference will be given here 
    //same output will hapeen no difference !
  //now we will apply sorting opertaion 
  const button = document.querySelector(".sort-btn");

  button.addEventListener("click", ()=>{
          course.sort( (a, b) => a.price - b.price )
          generateList();
  });

  const button1 = document.querySelector(".sort1-btn");

  button1.addEventListener("click", ()=>{
    course.sort( (c, d) => d.price - c.price )
    generateList();
});
  
// Hence sorting is done !!
//hence assignment done !!














