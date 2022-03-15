const menuBtn = document.querySelectorAll('nav button');
const connectionOverlay = document.querySelector('.connection-overlay');
menuBtn.forEach((el)=>{
    el.addEventListener('click', ()=>{
        if (el === menuBtn[0]) window.location.href = 'index.html';
        else if (el === menuBtn[1]) {
            if (!connectionOverlay.classList.contains('activef')) connectionOverlay.classList.add('activef');
            else connectionOverlay.classList.remove('activef');
        }
    });
});

//# sourceMappingURL=index.672d4772.js.map
