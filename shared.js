var backdrop=document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var modalNoButton=document.querySelector('.modal__action--negative');
var selectPlanButtons=document.querySelectorAll('.plan button');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');

//Thi function is for the Choose Plan button.

function planButtons(){
    //old Approach
        /*modal.style.display='block';
        backdrop.style.display='block';*/   
    modal.classList.add('open');
    backdrop.classList.add('open');
    
    }

for(var i=0; i< selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', planButtons);
}

//This function is for the NO button in the plan section.

function closeModal(){
   /* backdrop.style.display='none';
    modal.style.display='none';*/
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function(){
    //  mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

// This fumction is to display the Mobile Nav.

toggleButton.addEventListener('click', function(){
    /*mobileNav.style.display='block';
    backdrop.style.display='block';*/
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
} );
