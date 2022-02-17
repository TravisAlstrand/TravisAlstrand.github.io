const modalBtns = document.querySelectorAll('project-btn');

const modal1 = document.getElementById('project-modal-1');
const modal2 = document.getElementById('project-modal-2');
const modal3 = document.getElementById('project-modal-3');
const modal4 = document.getElementById('project-modal-4');

const modalCloseBtn = document.querySelector('.modal-close-btn');

// let modalOpen = false;

modalBtns.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('1')) {
        modal1.style.display = "block";
    }
});


console.log(modalBtns);

// modal1Btn.addEventListener('click', () => {
//     if (modalOpen === false) {
//         modal1.style.display = "block";
//         modalOpen = true;
//     }
// });



// modalCloseBtn.addEventListener('click', () => {
//     if (modalOpen === true) {
//         modal1.style.display = "none";
//         modalOpen = false;
//     }
// });

