

// if (ans) {
   
 
// }
// let ans = confirm("Siz animatsiyalar istaysizmi?");
let con=document.querySelector(".container")
let about_text=document.querySelector(".about_text")

let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let allElements = document.querySelectorAll("*");
 



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



// let li=document.querySelectorAll(".menu_ul>li>a")


// li.forEach((val,ind,arr)=>{

//    val.addEventListener("click",()=>{
      
      
//      if(val.textContent.toLowerCase()=="about"){
     
//       greeting("Mirtjiyev Ilhom")

      
//      }else if(val.textContent.toLowerCase()=="home"){
      
//      } else{

//       def()
//      }

//      arr.forEach(e=>{
//      if(e==val){
//       e.classList.add("active")
//      }else if(e.textContent.toLowerCase()=="home"){
//       e.classList.add("active")
//      }else{
//       e.classList.remove("active")
//      }
//      })


//    })
// })






// function greeting(name){

// document.querySelector(".modal").innerHTML=`


// Salom! Men ${name}, frontend dasturchiman. Zamonaviy va interaktiv veb-ilovalar yaratish. HTML, CSS, JavaScript hamda React va Vue kabi kutubxonalar bilan ishlayman. Portfoliomdagi loyihalarim bilan tanishib, mening ish uslubimni baholashingiz mumkin!

// `


// let info=document.querySelector(".info")

// info.classList.remove("dn")



// }


// function def(){

//    document.querySelector(".modal").innerHTML=`bu yerga  malumot joylanmagan
   
//    `
   
   
//    let info=document.querySelector(".info")
   
//    info.classList.remove("dn")


   
//    }


// document.querySelector  (".info").addEventListener("click",()=>{
//    let info=document.querySelector(".info")

//    li.forEach(e=>{
//       if(e.textContent.toLowerCase()=="home"){
//          e.classList.add("active")
//       }else{
//          e.classList.remove("active")
//       }
//    })

// info.classList.add("dn")

// })





let kub=document.querySelector(".cube")

let z=1

   setInterval(()=>{
    z++
    kub.style.transform = `rotateZ(45deg) rotateY(${z}deg) rotateX(${0}deg)`;


      
      

   },100)




   const carousel = document.querySelector(".carousel-container");
   const items = document.querySelectorAll(".carousel-item");
   const prevBtn = document.getElementById("prev");
   const nextBtn = document.getElementById("next");
   
   let currentIndex = 0;
   const totalItems = items.length;
   const theta = (2 * Math.PI) / totalItems;
   const radius = 400;
   
   function rotateCarousel() {
     const angle = theta * currentIndex * -1;
     carousel.style.transform = `rotateY(${angle}rad)`;
   
     items.forEach((item, index) => {
       const itemAngle = theta * index;
       const x = Math.sin(itemAngle) * radius;
       const z = Math.cos(itemAngle) * radius;
       item.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${itemAngle}rad)`;
     });
   }
   
   // Initial setup
   items.forEach((item, index) => {
     const itemAngle = theta * index;
     item.style.transform = `rotateY(${itemAngle}rad) translateZ(${radius}px)`;
   });
   
   // Event listeners for buttons
   prevBtn.addEventListener("click", () => {
     currentIndex--;
     rotateCarousel();
   });
   
   nextBtn.addEventListener("click", () => {
     currentIndex++;
     rotateCarousel();
   });
   
   // Auto-rotate
   setInterval(() => {
     currentIndex++;
     rotateCarousel();
   }, 5000);
   
   // Initial rotation
   rotateCarousel();
   

