//contrilling menu
let linksPars = document.querySelector('.header .links');
let linksUl = document.querySelector('.header .links ul');
linksPars.addEventListener("click",(e)=>{
    e.stopPropagation();
    linksPars.classList.toggle("open");
});
    //click anywhere outsid menu to close the menu
    document.addEventListener("click", (e)=>{
        
        if (e.target !== linksPars && e.target !== linksUl) {
            linksPars.classList.remove("open");
        }
    });


//controlling slider background
let bg_imgs = ['landing_1.jpg', 'landing_2.png', 'landing_3.jpg', 'landing_4.jpg'];
let landing_sec = document.querySelector('.landing');
let rightAngle = document.querySelector('.landing .fa-angle-right');
let leftAngle = document.querySelector('.landing .fa-angle-left');
//get number of slides
let current_slide = 0;

//create ul and li 
let slider_ul = document.createElement("ul");
slider_ul.setAttribute("class", "slider-ul");
for (let i = 0; i < bg_imgs.length; i++) {
    let slider_li = document.createElement("li");
    slider_li.setAttribute("data-index",i);
    slider_li.setAttribute("class","bullet");
    slider_ul.appendChild(slider_li);
};
landing_sec.appendChild(slider_ul);
 //get created ul & li
 let created_ul = document.querySelector(".landing .slider-ul");
 let created_li = document.querySelectorAll(".slider-ul li");
 
//trigger function
add_active();
handle_bullets();
function next_slide () {
    if (current_slide === (bg_imgs.length -1)) {
        rightAngle.classList.add("unactive");
    }else if(current_slide < (bg_imgs.length - 1)){
        remove_active();
        handle_bullets();
        leftAngle.classList.remove("unactive");
        current_slide++;
        landing_sec.style.backgroundImage = `url(../images/${bg_imgs[current_slide]})`;
        add_active();
    }
};
function prev_slide () {
    if (current_slide === 0) {
        leftAngle.classList.add("unactive");
    }else if(current_slide > 0){
        remove_active();
        handle_bullets();
        rightAngle.classList.remove("unactive");
        current_slide--;
        landing_sec.style.backgroundImage = `url(../images/${bg_imgs[current_slide]})`;
        add_active();
    }
};

//create function to add active class on bullet
function add_active () {
    created_li[current_slide].classList.add("active");
}
function remove_active () {
    created_li[current_slide].classList.remove("active");
}
//create function that remove & add active class
function handle_bullets (){
    created_li.forEach(bullete => {
        bullete.addEventListener("click", () =>{
            created_li.forEach(li =>{
                li.classList.remove("active");
            });
            bullete.classList.add("active");
            current_slide = parseInt(bullete.getAttribute("data-index"));
            landing_sec.style.backgroundImage = `url(../images/${bg_imgs[current_slide]})`;
            if (bullete.classList.contains("active")) {
                if (bullete.getAttribute("data-index") > "0" && bullete.getAttribute("data-index") < (bg_imgs.length -1).toString()) {
                    rightAngle.classList.remove("unactive");
                    leftAngle.classList.remove("unactive");
                };
            };
        });
    });
};


rightAngle.addEventListener("click", next_slide);
leftAngle.addEventListener("click", prev_slide);

