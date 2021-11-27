const c = document.getElementById("circle");
function setSegment(deg)   {
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    const cx = c.width / 2;
    const cy = c.height / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, Math.min(c.width,c.height)*0.47, 0, deg * (Math.PI / 180));
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();
    ctx.fillStyle = "#ff000080";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
var deg = 0;
function rotation() {
    if(deg < 360)    {
        setTimeout(function(){
            setSegment(deg++);
            rotation();
        }, 25);
    }
}
rotation();
/*function sound(f)    {
    const audioCtx = new window.AudioContext;
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(f, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
}*/
function playSound()    {
    setInterval(function(){
        (new Audio("sounds/3000.wav")).play();
    }, 1000);
}
document.getElementById("main").onclick = function(){playSound();};
onkeydown = function(){playSound();};