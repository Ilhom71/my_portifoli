

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




let top_link=document.querySelector(".about_l")

top_link.addEventListener("click",()=>{
 document.querySelector(".about").scrollIntoView({behavior:"smooth"})
})



let top_link3=document.querySelector(".contact_l")

top_link3.addEventListener("click",()=>{
 document.querySelector(".contact").scrollIntoView({behavior:"smooth"})
})



function roll(){
  
let top_link2=document.querySelector(".portfolio_l")

top_link2.addEventListener("click",()=>{
 document.querySelector(".portiolio").scrollIntoView({behavior:"smooth"})
})
}

roll()


let links= document.querySelectorAll(".about>img")


links.forEach((val,ind)=>{
  val.addEventListener("click",()=>{

   if(ind==0){
    
   }
  })
})

