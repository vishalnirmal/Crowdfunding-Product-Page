var back_this_course = document.querySelector(".cta-back");
back_this_course.addEventListener("click", ()=>{
    document.body.classList.add("show-modal");
});

var icon_close = document.querySelector(".icon-close");
icon_close.addEventListener("click", ()=>{
    document.body.classList.remove("show-modal");
    document.querySelector(".modal").classList.remove("completed");
})

var icon_bookmark = document.querySelector(".cta-bookmark");
icon_bookmark.addEventListener("click", ()=>{
    if(icon_bookmark.classList.contains("bookmarked")){
        icon_bookmark.classList.remove("bookmarked");
    }
    else{
        icon_bookmark.classList.add("bookmarked");
    }
}); 

var radio_button = document.querySelectorAll(".type-selection");
radio_button.forEach(button =>{
    button.addEventListener("change", ()=>{
        radio_button.forEach(btn =>{
            if(btn.checked){
                btn.parentElement.parentElement.classList.add("item-selected");
            }
            else{
                btn.parentElement.parentElement.classList.remove("item-selected");
            }
            if(button.id == "support"){
                document.querySelector(".modal").classList.add("completed");
                document.querySelector(".modal-success").scrollIntoView(true);
            }
        });
        if(button.checked){
            button.parentElement.parentElement.classList.add("item-selected");
        }
        else{
            button.parentElement.parentElement.classList.remove("item-selected");
        }
        if(button.id == "support"){
            document.querySelector(".modal").classList.add("completed");
            document.querySelector(".modal-success").scrollIntoView(true);
        }
    });
});

var forms = document.querySelectorAll(".price-input");
forms.forEach(form =>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        document.querySelector(".modal").classList.add("completed");
        document.querySelector(".modal-success").scrollIntoView(true);
    });
});

var cta_got_it = document.querySelector(".cta-got-it");
cta_got_it.addEventListener("click", ()=>{
    document.body.classList.remove("show-modal");
    document.querySelector(".modal").classList.remove("completed");
    radio_button.forEach(button=>{
        if(button.checked){
            button.checked = false;
            button.parentElement.parentElement.classList.remove("item-selected");
        }
    })
});

var heading = document.querySelectorAll(".info .header .heading");
heading.forEach(item => {
    item.addEventListener("click", ()=>{
        item.parentElement.previousElementSibling.click();
    });
});