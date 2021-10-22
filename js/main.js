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
        document.querySelector('.details .container').classList.add('active')
    }
});