const modal = document.querySelector('.modal');
// const userMethods = document.querySelector('.user-methods');
const loginBtn = document.querySelector('#login-btn');
const regBtn = document.querySelector('#reg-btn');
const modalClose = document.querySelector('.modal-close');
const userMethods = document.querySelector('.user-methods');
const loginTab = document.querySelector('#login-tab');
const regTab = document.querySelector('#reg-tab');
const loginHeadBtn = document.querySelector('.login-tab');
const regHeadBtn = document.querySelector('.reg-tab');
const activeTab = 'tab-active';

function reset() {
    modal.style.display = 'none';
    regTab.style.display = 'none';
    loginTab.style.display = 'none';
}
loginBtn.onclick = () => {
    modal.style.display = 'block';
    loginHeadBtn.classList.add(activeTab);
    regHeadBtn.classList.remove(activeTab);
    loginTab.style.display = 'block';
    regTab.style.display = 'none';
}

regBtn.onclick = () => {
    modal.style.display = 'block';
    regHeadBtn.classList.add(activeTab);
    loginHeadBtn.classList.remove(activeTab);
    regTab.style.display = 'block';
    loginTab.style.display = 'none';
}

loginHeadBtn.onclick = () => {
    loginHeadBtn.classList.add(activeTab);
    regHeadBtn.classList.remove(activeTab);
    loginTab.style.display = 'block';
    regTab.style.display = 'none';
}
regHeadBtn.onclick = () => {
    regHeadBtn.classList.add(activeTab);
    loginHeadBtn.classList.remove(activeTab);
    regTab.style.display = 'block';
    loginTab.style.display = 'none';
}

modalClose.onclick = () =>  {
    reset();
}
window.onclick = (event) => {
    if(event.target == modal) {
        reset();
    }
}

