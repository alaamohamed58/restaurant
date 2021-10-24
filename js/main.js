//header
let links = [`home`, `about`, `menu`, `specials`, `events`, `chefs`, `gallery`, `drop down`, `contact`, `book a table`];
let dropDown = [`drop down 1`, `deep drop down`, `drop down 2`, `drop down 3`];
let DeepdropDown = [`deep drop down 1`, ` deep drop down 2`, ` deep drop down 3`];
let ul = document.createElement('ul'),
dropDownUL = document.createElement('ul'),
DeepdropDownUL = document.createElement('ul');
for(let i = 0; i<links.length; i++){
    let li = document.createElement('li');
    let aHref = document.createElement('a');
    aHref.href = '#';
    aHref.textContent = links[i];
    li.appendChild(aHref);
    ul.appendChild(li);
    document.querySelector('header nav').appendChild(ul);
}
for(var j = 0; j < dropDown.length; j++){
    let dropDownA = document.createElement('a');
    dropDownA.href = '#';
    dropDownA.textContent = dropDown[j];
    let dropDownLi = document.createElement('li');
    dropDownLi.appendChild(dropDownA);
    dropDownUL.appendChild(dropDownLi);
}
for(var k = 0; k < DeepdropDown.length; k++){
    let DeepdropDownA = document.createElement('a');
    DeepdropDownA.href = '#';
    DeepdropDownA.textContent = DeepdropDown[k];
    let DeepdropDownLi = document.createElement('li');
    DeepdropDownLi.appendChild(DeepdropDownA);
    DeepdropDownUL.appendChild(DeepdropDownLi);
}
dropDownUL.classList = "dropDown";
DeepdropDownUL.classList = "deepDropDown";
dropDownUL.children[1].appendChild(DeepdropDownUL)
ul.children[7].appendChild(dropDownUL);
document.querySelector('header nav .hamburger').onclick = function(){
    if(!document.querySelector('header .container nav > ul').classList.contains('active')){
        document.querySelector('header .container nav > ul').classList.add('active');
        this.classList.add('active');
    }else{
        document.querySelector('header .container nav > ul').classList.remove('active');
        this.classList.remove('active');
    }
}
document.querySelector('.dropDown').children[1].onclick = function(){
    this.classList.toggle("active")
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 350){
        document.querySelector('header').style.top = "0px";
        document.querySelector('.top-head').style.opacity = "0";
    }else{
        document.querySelector('header').style.top = "40px";
        document.querySelector('.top-head').style.opacity = "1";

    }
});
//
window.addEventListener('load', ()=>{
        document.querySelector('.landing .content').style.display = "block";
});
window.addEventListener('scroll', ()=>{
    if(document.querySelector('.details .container').getBoundingClientRect().top < window.innerHeight){
        document.querySelector('.details .container').classList.add('active');
    }
    if(document.querySelector('.unique .container').getBoundingClientRect().top < window.innerHeight){
        document.querySelector('.unique .container').classList.add('active')
    };
    if(document.querySelector('.menu .container').getBoundingClientRect().top < window.innerHeight){
        document.querySelector('.menu .container').classList.add('active');
        document.querySelector('.menu .container ul').classList.add('active');
    };
});
//MENU
let menu = [`all`, `starters`, `salads`, `specially`],
menuIMG = [`images/menu/bread-barrel.jpg`,
`images/menu/caesar.jpg`,
`images/menu/cake.jpg`,
`images/menu/greek-salad.jpg`,
`images/menu/lobster-bisque.jpg`,
`images/menu/lobster-roll.jpg`,
`images/menu/mozzarella.jpg`,
`images/menu/spinach-salad.jpg`,
`images/menu/tuscan-grilled.jpg`],
foodName = [`Lobster Bisque`, ``]
let Ulmenu = document.createElement('ul');
for(let i = 0; i < menu.length; i++){
    let li = document.createElement('li');
    li.textContent = menu[i];
    Ulmenu.appendChild(li);
    document.querySelector('.menu .container .main-heading').after(Ulmenu)
}
for(let i = 0; i < menuIMG.length; i++){
    let menuH4 = document.createElement('h4'),
    menuP = document.createElement('p'),
    menuPic = document.createElement('img'),
    textBox = document.createElement('div');
    textBox.classList = "texts";
    textBox.appendChild(menuH4);
    textBox.appendChild(menuP);
    menuBox = document.createElement('div');
    menuH4.innerHTML = "Bread Barrel <span> $6.95 </span>"
    menuP.textContent = "lorem lda dafp apjfp pkda"
    menuBox.classList.add("all", "box") ;
    menuPic.src = menuIMG[i];
    menuBox.appendChild(textBox);
    menuBox.appendChild(menuPic);
    document.querySelector('.menu .content').appendChild(menuBox);
}

/*
document.querySelector('.menu .content .box:nth-child(1) h4').innerHTML = "Bread Barrel <span> $6.95 </span>";
document.querySelector('.menu .content .box:nth-child(1) p').textContent = "Lorem, deren, trataro, filede, nerada";

document.querySelector('.menu .content .box:nth-child(2) h4').innerHTML = "Caesar Selections <span> $8.95 </span>";
document.querySelector('.menu .content .box:nth-child(2) p').textContent = "Lorem, deren, trataro, filede, nerada";

document.querySelector('.menu .content .box:nth-child(3) h4').innerHTML = "Crab Cake <span> $7.95 </span>";
document.querySelector('.menu .content .box:nth-child(3) p').textContent = "A delicate crab cake served on a toasted roll with lettuce and tartar sauce";

document.querySelector('.menu .content .box:nth-child(5) h4').innerHTML = "Lobster Bisque <span> $5.95 </span>";
document.querySelector('.menu .content .box:nth-child(5) p').textContent = "Lorem, deren, trataro, filede, nerada";*/

document.querySelector('.menu .content').children[0].classList.add('specially');
document.querySelector('.menu .content').children[5].classList.add('specially');
document.querySelector('.menu .content').children[8].classList.add('specially');

document.querySelector('.menu .content').children[1].classList.add('salads');
document.querySelector('.menu .content').children[3].classList.add('salads');
document.querySelector('.menu .content').children[7].classList.add('salads');

document.querySelector('.menu .content').children[2].classList.add('starters');
document.querySelector('.menu .content').children[6].classList.add('starters');
document.querySelector('.menu .content').children[4].classList.add('starters');
Ulmenu.children[0].setAttribute('class', 'active');
Ulmenu.children[0].setAttribute('data-menu', '.all');
Ulmenu.children[1].setAttribute('data-menu', '.starters');
Ulmenu.children[2].setAttribute('data-menu', '.salads');
Ulmenu.children[3].setAttribute('data-menu', '.specially');
//
let liMenu = document.querySelectorAll(".menu  ul li"),
 MenuList = document.querySelectorAll(".menu  .content .box");
liMenu.forEach((li) => {
    li.addEventListener('click', function removeAct(){
        liMenu.forEach((li) => {
            li.classList.remove('active');
            this.classList.add('active');
        })
    })
    li.addEventListener('click', function remove(){
        MenuList.forEach((list)=>{
            list.style.display = "none"
        })
        document.querySelectorAll(this.dataset.menu).forEach((a)=>{
            a.style.display = "flex"
    
        })
        })
});
//specials
document.querySelectorAll('.specials ul li').forEach((li)=>{
    li.addEventListener('click', function(){
        document.querySelectorAll('.specials ul li').forEach((li)=>{
            li.classList.remove('active');
            this.classList.add('active');
        })
    })
    li.addEventListener('click', function(){
        document.querySelectorAll('.specials .content').forEach((a)=>{
            a.style.display = "none";
        })
        document.querySelectorAll(this.dataset.special).forEach((s)=>{
            s.style.display = "flex"
        })
    })
})
//evens
let eventsSlides = Array.from(document.querySelectorAll(".events .content .box")),
slidesLength = eventsSlides.length,
cuurentSlide = 1;


let bullets = document.createElement("ul");
bullets.classList = "bullets";

for(let i = 1; i <= slidesLength; i++){
    let bulletsLis = document.createElement('li');
    bulletsLis.setAttribute('data-index', i)
    bullets.appendChild(bulletsLis);
}
document.querySelector('.events .content').appendChild(bullets);
let ulAg = document.querySelector('.events .content .bullets');
let bulletsLi = document.querySelectorAll('.events .content .bullets li');

for(var i = 0; i<bulletsLi.length; i++){
    bulletsLi[i].onclick = function(){
        cuurentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
};
//
checker()
function checker(){
    remove();
    eventsSlides[cuurentSlide - 1].classList.add('active');
    bullets.children[cuurentSlide - 1].classList.add('active');
 
}
function remove(){
    eventsSlides.forEach((a)=>{
        a.classList.remove('active');
        
    });
    bulletsLi.forEach((li)=>{
        li.classList.remove('active')
    })
}

let currentplus = setInterval(function(){
    if(cuurentSlide == slidesLength){
        cuurentSlide = 1;
    }else{
        cuurentSlide ++;
    }
    checker();
}, 3000)
//testimonial
let comments = Array.from(document.querySelectorAll('.testimonial .container .content .box')),
pass = false,
currentComment = 1;
let TestiUL = document.createElement('ul');
TestiUL.classList = "bullets";
for(let i = 1; i <= comments.length; i++ ){
    let TestiLi = document.createElement('li');
    TestiLi.setAttribute('data-index', i);
    TestiUL.appendChild(TestiLi);
    document.querySelector('.testimonial .container .content').appendChild(TestiUL);
}
let TestiLiS = document.querySelectorAll('.testimonial .container .content .bullets li');
fix();
function fix(){
    removeActiveClass();
    comments[currentComment - 1].classList.add('active');
    TestiUL.children[currentComment - 1].classList.add('active');
};
for(let i = 0; i < TestiLiS.length; i++){
    TestiLiS[i].onclick = function(){
        currentComment = parseInt(this.getAttribute('data-index'));
        fix();
    }
}
function removeActiveClass(){
    comments.forEach((a)=>{
        a.classList.remove('active');
    });
    TestiLiS.forEach((li)=>{
        li.classList.remove('active');
    })
};
let commentPlus = setInterval(function(){
    if(currentComment == comments.length){
        currentComment = 1;
    }else{
        currentComment++;
    }
   
    fix();
}, 4000);
//gallery
let modalImg = document.querySelector('.gallery .modal img'),
galleryImg = Array.from(document.querySelectorAll(".gallery .content .box img")),
nextBtn = document.querySelector('.gallery .container .modal i.right'),
preBtn = document.querySelector('.gallery .container .modal i.left'),
current = 1;

galleryImg.forEach((img)=>{
    img.addEventListener('click', function(){
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        document.querySelector('.gallery .modal').style.display = "flex"
    })
})
nextBtn.onclick = function(){
    current ++;
    
    checkers();
}



checkers()
function checkers(){
    removes();
    galleryImg[cuurentSlide - 1].classList.add('active'); 
    
}
function removes(){
    galleryImg.forEach((a)=>{
        a.classList.remove('active');
        
    });
}




document.querySelector('.gallery .container .modal span').onclick = ()=>{
    document.querySelector('.gallery .modal').style.display = "none"
};
//chefs
let chefs = [`images/chefs/chefs-1.jpg`,
`images/chefs/chefs-2.jpg`,
`images/chefs/chefs-3.jpg`];
for(let i = 0; i < chefs.length; i++){
    let chefBox = document.createElement('div');
    chefBox.classList = "box";
    let chefImg = document.createElement('img');
    let details = document.createElement('div');
    details.style.cssText = "position : absolute ; top : 0;  width : 100%; height : 100%"
    details.classList = "information";
    chefImg.style.width = "100%";
    chefImg.src = chefs[i];
    chefImg.alt = "chefs";
    chefBox.appendChild(chefImg);
    chefBox.appendChild(details);
    document.querySelector('.chefs .content').appendChild(chefBox);
}
let infor =   document.querySelectorAll('.chefs .content .box .information');
infor[0].innerHTML = ` <div class = "text"> <h4> Walter White </h4>
<span> Master Chef </span> <div class = "icons"> 
<i class="fab fa-twitter"></i>
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-linkedin-in"></i>
 </div> 
 </div>
` 
infor[1].innerHTML = ` <div class = "text"> <h4> Sarah Jhonson</h4>
<span> Patissier </span> <div class = "icons"> 
<i class="fab fa-twitter"></i>
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-linkedin-in"></i>
 </div> 
 </div>
` 
infor[2].innerHTML = ` <div class = "text"> <h4> William Anderson </h4>
<span> Cook </span> <div class = "icons"> 
<i class="fab fa-twitter"></i>
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-linkedin-in"></i>
 </div> 
 </div>
` 