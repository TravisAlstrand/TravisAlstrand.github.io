const modalBtns = document.querySelectorAll('.project-img');

const modals = document.querySelectorAll('.project-modal');

const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('1')) {
            for(let i = 0; i < modals.length; i++) {
                if (modals[i].classList.contains('pm1')) {
                    modals[i].style.display = "block";
                }
            }
        } else if (target.classList.contains('2')) {
            for(let i = 0; i < modals.length; i++) {
                if (modals[i].classList.contains('pm2')) {
                    modals[i].style.display = "block";
                }
            }
        } else if (target.classList.contains('3')) {
            for(let i = 0; i < modals.length; i++) {
                if (modals[i].classList.contains('pm3')) {
                    modals[i].style.display = "block";
                }
            }
        } else if (target.classList.contains('4')) {
            for(let i = 0; i < modals.length; i++) {
                if (modals[i].classList.contains('pm4')) {
                    modals[i].style.display = "block";
                }
            }
        } else if (target.classList.contains('5')) {
            for(let i = 0; i < modals.length; i++) {
                if (modals[i].classList.contains('pm5')) {
                    modals[i].style.display = "block";
                }
            }
        }
    })
});

modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        target.parentNode.parentNode.style.display = "none";
    })
});

