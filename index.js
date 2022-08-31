

let root = document.getElementById("root");
let height = 100;
let width = 100;
let loopCount = 30; // 600
let frameCount = 0;

function init() {
    let sb = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            sb += '<span>A</span>'
        }
        sb += '<br>'
    }
    root.innerHTML = sb;
}

function randomizeBoard() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let charPool = "ABCDEFGHIJKLNOPQRSTUVWabcdefghijklmnopqrstuvw";
            let randomNumber = Math.floor(Math.random() * charPool.length);
            let letter = charPool[randomNumber];
            root.children[y * (height + 1) + x].innerHTML = `${letter}`
        }
    }
}

init();
for (let i = 0; i < loopCount; i++) {
    frameCount++;
    randomizeBoard();
    for (let y = 0; y < 1; y++) {
        let frameCountString = `FrameCount: ${frameCount}`;
        for (let x = 0; x < width; x++) {
            if (x < frameCountString.length) {
                root.children[y * (height + 1) + x].innerHTML = frameCountString[x];
            } else {
                root.children[y * (height + 1) + x].innerHTML = `&nbsp;`
            }
        }
    }
    
    await sleep(1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
