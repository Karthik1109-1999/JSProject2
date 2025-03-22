'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i =0;i<btnsOpenModal.length;i++)
{
    btnsOpenModal[i].addEventListener('click', function(){   
        openModal()
    });
}
btnCloseModal.addEventListener('click',function(){
    closeModal()
});
overlay.addEventListener('click',function(){
   closeModal();
});

document.addEventListener('keypress',function(keypressEventObject){
    if(keypressEventObject.key === 'Enter'){
        openModal();
        console.log(keypressEventObject);
    }
    else{
        console.log('Press Enter👆 for OpenModal...\n\ Press Space🤞 for CloseModal...');
    }
})