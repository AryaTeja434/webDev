

let nav=document.querySelector(".nav")

window.addEventListener("scroll",()=>{
    if(scrollY > 130){
        nav.classList.add("show")
    }else{
        nav.classList.remove("show")
    }
})

let loader=document.querySelector(".loader")
loader.classList.remove("hidden")

window.addEventListener("load",()=>{

    loader.classList.add("hidden")

    let h1=document.createElement("h1")
    h1.innerText="Page Loaded Successfully"
    h1.classList.add("pop-up")
    document.body.appendChild(h1)
    setTimeout(()=>{
        document.body.removeChild(h1)
    },1000)
})

let footer=document.querySelector(".footer")

window.addEventListener("scroll",()=>{
    if(scrollY > 300){
        footer.classList.remove("hidden")
    }else{
        footer.classList.add("hidden")
    }
})