
let ans = confirm("Siz animatsiyalar istaysizmi?");
let con=document.querySelector(".container")
if (ans) {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".sun");
    let allElements = document.querySelectorAll("*");
      console.log(allElements);



    moon.addEventListener("click",()=>{
       sun.classList.add("db")
       sun.classList.remove("dn")
       moon.classList.add("dn")
       moon.classList.remove("db")

       con.style.backgroundColor="white"
       allElements.forEach(e=>{
        e.style.color="black"
       })

    })

    sun.addEventListener("click",()=>{
        sun.classList.add("dn")
        sun.classList.remove("db")
        moon.classList.remove("dn")
        moon.classList.add("db")
        con.style.backgroundColor="black"
         allElements.forEach(e=>{
            e.style.color="white"
         })
     })

     let name_i = "Mirtojiyev Ilhom"
     document.querySelector(".name").innerHTML=" "
let ln=name_i.length
let i=0;
setInterval(() => {
   if(i<ln){
    
    document.querySelector(".name").innerHTML+=name_i[i]
    i++
   }else if(i>=ln){
    i=0
    document.querySelector(".name").innerHTML=" "
   }
}, 400);
 
}







