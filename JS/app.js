const books= document.querySelectorAll(".book-container");
const filter= document.querySelector(".filter-items");

filter.addEventListener("click",(event)=>{
    if (!event.target.classList.contains("active")) {
       document.querySelector(".active").classList.remove("active");
       event.target.classList.add("active");
      
    }
    const filterValue= event.target.getAttribute("data");
    books.forEach(book=>{
        if (book.classList.contains(filterValue) || filterValue==="All") {
            book.classList.remove("hide");
            book.classList.add("show");
        }else{
            book.classList.remove("show");
            book.classList.add("hide");
        }
    })
    event.stopPropagation;
})