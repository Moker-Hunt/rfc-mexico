document.addEventListener('DOMContentLoaded', () => {
    const tumblerOn = document.querySelector('.tumblerOn');
    const tumblerOff = document.querySelector('.tumblerOff');
    const navList = document.querySelector('.nav-list');

    tumblerOn.addEventListener('click', () => {
        tumblerOn.classList.toggle('active');
        tumblerOff.classList.toggle('active');
        navList.classList.toggle('active');
    });

    tumblerOff.addEventListener('click', () => {
        tumblerOff.classList.toggle('active');
        tumblerOn.classList.toggle('active');
        navList.classList.toggle('active');
    });

    const tumblerRevertOn = document.querySelector('.tumbler-revertOn');
    const tumblerRevertOff = document.querySelector('.tumbler-revertOff');
    const navListRevert = document.querySelector('.nav-list-revert');

    tumblerRevertOn.addEventListener('click', () => {
        tumblerRevertOn.classList.toggle('active');
        tumblerRevertOff.classList.toggle('active');
        navListRevert.classList.toggle('active');
    });

    tumblerRevertOff.addEventListener('click', () => {
        tumblerRevertOff.classList.toggle('active');
        tumblerRevertOn.classList.toggle('active');
        navListRevert.classList.toggle('active');
    });
});