const output = document.querySelector('#countdown');

let end = new Date(Date.now() + (1000 * 60 * 1)).getTime();
let d = Date.now();
let interval = setInterval(() => {
    d = end - Date.now();
    const seconds = Math.floor((d % (1000 * 60)) / 1000);
    output.textContent = `${seconds.toString().padStart(2, '0')}`;
    if (seconds <= 0) {
        clearInterval(interval);
        output.textContent = "";
    }
}, 999)
