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





