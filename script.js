let colorId = function () {
    let hex = '123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let colorInterval;
let startChanging = function () {
    let changeColor = function () {
        document.body.style.backgroundColor = colorId();
    }

    colorInterval = setInterval(changeColor, 1000);
};

let stopChanging = function () {
    clearInterval(colorInterval);
}

document.querySelector('#start').addEventListener('click', startChanging);

document.querySelector('#stop').addEventListener('click', stopChanging);

