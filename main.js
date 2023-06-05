let bar = document.querySelector('.bars');
let navItem = document.querySelector('.nav-items');

bar.addEventListener('click', ()=>{
    if(navItem.classList.contains('active'))
    {
        navItem.classList.remove('active');
    }else{
        navItem.classList.add('active');
    }
})