const modal2 = document.querySelector(".modal2");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview)=>{
    preview.addEventListener("click",()=>{
         modal2.classList.add("open");
         original.classList.add("open");
         const originalSrc = preview.getAttribute('data-original')
         original.src = `/img/${originalSrc}`
     })
  });
  
  modal2.addEventListener("click", (e)=> {
      if (e.target.classList.contains("modal2")){
          modal2.classList.remove("open");
          original.classList.remove("open")
      }
  })
