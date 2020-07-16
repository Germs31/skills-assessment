const email = document.querySelectorAll('.email');
const phone = document.querySelectorAll('.phone');

const optionSelector = () => {
    let optionDrop = document.getElementById('option').value;
    
    if(optionDrop === '1'){
        phone.forEach(item => {
            item.style.display = 'block'
        });
        email.forEach(item => {
            item.style.display = 'none'
        });
    } else {
        phone.forEach(item => {
            item.style.display = 'none'
        });
        email.forEach(item => {
            item.style.display = 'block'
        });
    }
}

const info = document.querySelectorAll(".table-row");
info.forEach(item => {
    item.addEventListener('click', (e) => {
        
        let infoCtx = document.querySelector('.contact-info');
        infoCtx.classList.toggle('is-visable');
    })
})