const modal = document.querySelector(".modall");

const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview)=>{
  preview.addEventListener("click",()=>{
       modal.classList.add("open");
       original.classList.add("open");
       const originalSrc = preview.getAttribute('data-original')
       original.src = `/img/${originalSrc}`
   })
});

modal.addEventListener("click", (e)=> {
    if (e.target.classList.contains("modall")){
        modal.classList.remove("open");
        original.classList.remove("open")
    }
})




