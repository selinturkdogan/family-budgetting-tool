const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler'); // Light Dark Themew



menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})


const btnSideList = document.querySelectorAll('.sideoptions');
//thıs dorsnt work again
btnSideList.forEach(btnSide => {
    btnSide.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnSide.classList.add('special');
    })
})