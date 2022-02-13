let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active'); 
    }
});

"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0){
            form.classList.add("_sending");
            let response = await fetch('sendmail.php', {
                method : 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove("_sending");

            } else {
                alert('ERROR 404');
                form.classList.remove("_sending");

            }

        } else {
            alert('Требуется для полной отправки данных')
        }
    }
    
    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_name')){
                if (NameTest(input)){
                    formAddError(input);
                        error++;
                }
            } else {
                if (input.value === ''){
                    formAddError(input);
                    error++;
                    }
                }
 
            } 
            return error;
    }
    function formAddError(input){
        input.parentElement.classList.add("_error");
        input.classList.add('_error');

    }
    function formRemoveError(input){
        input.parentElement.classList.remove("_error");
        input.classList.remove('_error');
    }

    function NameTest(input) {
        
    } 
    
})


