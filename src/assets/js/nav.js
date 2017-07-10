const NT = {
    bgc: 'rgba(255, 255, 255, 0)',
    h: 50,
    type: '',
    isTabExpand: false
};

export function setType(type) {
    type === '' ? type = 'default' : '';
    NT.type = type;
}

export function navScrollOnTop() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var navBar = document.getElementById('navbar');
    if (top <= 50) {
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        navBar.style.boxShadow = 'none';
        navBar.style.paddingTop = '20px';
        navBar.style.height = '50px';
    } else if (top > 50 && top <= 650) {
        if (NT.type === 'light') {
            navBar.style.backgroundColor = 'rgba(200, 200, 200, 0.4)';
        } else if (NT.type === 'dark') {
            navBar.style.backgroundColor = 'rgba(66, 66, 66, 0.4)';
        } else {
            navBar.style.backgroundColor = 'rgba(150, 150, 150, 0.5)';
        }
        navBar.style.boxShadow = '#444 0 0 10px';
        navBar.style.paddingTop = '12px';
        navBar.style.height = '40px';
    } else {
        navBar.style.backgroundColor = 'rgba(150, 150, 150, 0.5)';
        navBar.style.boxShadow = '#444 0 0 10px';
        navBar.style.paddingTop = '12px';
        navBar.style.height = '40px';
    }
    if (NT.isTabExpand) {
        NT.isTabExpand = false;
        iconRotate();
    }
    NT.bgc = navBar.style.backgroundColor;
    NT.h = parseInt(navBar.style.height.replace(/[^0-9]/g, ''));
}

export function itemEvent() {
    var subNavBar = document.getElementById('subNavbar-Collection');
    if (!NT.isTabExpand) {
        itemExpand();
        subNavBar.addEventListener('mouseleave', itemCollapse, false);
    } else {
        itemCollapse();
    }
}

function itemExpand() {
    NT.isTabExpand = true;
    var navBar = document.getElementById('navbar');
    navBar.style.height = NT.h + 50 + 'px';
    NT.type === 'dark' ? navBar.style.backgroundColor = 'rgba(100, 100, 100, 0.85)' : navBar.style.backgroundColor = 'rgba(230, 230, 230, 0.85)';
    iconRotate();
}

function itemCollapse() {
    NT.isTabExpand = false;
    var navBar = document.getElementById('navbar');
    navBar.style.height = NT.h + 'px';
    navBar.style.backgroundColor = NT.bgc;
    iconRotate();
}

function iconRotate() {
    var downIcon = document.getElementById('rotate');
    downIcon.style.transition = 'transform 0.3s';
    if (!NT.isTabExpand) {
        downIcon.style.transform = 'rotate(0)';
    } else {
        downIcon.style.transform = 'rotate(180deg)';
    }
}
