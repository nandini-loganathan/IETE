let theEnd = 0, navbar=document.getElementById('navbar');
window.addEventListener('scroll',function (){
    var scrollTop = window.scrollX || document.documentElement.scrollTop;
    if(scrollTop>theEnd){
        navbar.style.top='-80px';
    } 
    else{
        navbar.style.top='0';
    }
    theEnd=scrollTop;
})

const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
} 
menu.addEventListener('click',mobileMenu);

//counter
const counters = document.querySelectorAll('.counters span')
const container = document.querySelector('.counters')

let activated= false
window.addEventListener("scroll",()=> {
    if(scrollY>container.offsetTop-container.offsetHeight - 200 && activated===false)
    {
        counters.forEach(counter => {
            counter.innerText=0;
            let count=0
            function updateCount() {
                const target=parseInt(counter.dataset.count);
                if(count<target) {
                    count++;
                    counter.innerText=count;
                    setTimeout(updateCount,30)
                }
                else {
                    counter.innerText=target
                }
            }

            updateCount();

            activated=true;
        })     
    }
    else if (scrollY<container.offsetTop - container.offsetHeight-500 || scrollY===0 && activated===true )
    {
        counters.forEach(counter => {
            counter.innerText=0;
        })
        activated=false
    }
})
