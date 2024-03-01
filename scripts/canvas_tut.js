window.addEventListener("load",()=>{
    const canvas = document.querySelector("canvas");
    const ctx=canvas.getContext("2d");
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    // ctx.strokeStyle='red';
    // ctx.lineWidth=5;
    // ctx.strokeRect(100,100,400,300);

    // ctx.moveTo(100,100);
    // ctx.lineTo(300,200);
    // ctx.moveTo(100,100);
    // ctx.lineTo(100,200);
    // ctx.moveTo(100,200);
    // ctx.lineTo(300,200);
    // ctx.strokeStyle='red';
    // ctx.stroke();

    // var canvas=document.getElementById("canvas");
    // var ctx=canvas.getContext("2d");
    // console.log(ctx);
    // ctx.font = '70px arial';
    // ctx.fillText("hello world",40,70);
    // var grd=ctx.createLinearGradient(0,0,200,0);
    // grd.addColorStop(0,"white");
    // grd.addColorStop(0.3,"red");
    // grd.addColorStop(1,"white");
    // ctx.fillStyle=grd;
    // ctx.fillRect(10,10,150,80);
    // ctx.beginPath(30,40);
    // ctx.arc(95,50,40,0,2*Math.PI);
    // ctx.stroke();
    let painting=false;
    function startposition(e){
        painting=true;
        draw(e);
    }
    function finishposition(){
        painting=false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap='round';
        ctx.strokeStyle='red';
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    canvas.addEventListener("mousedown",startposition);
    canvas.addEventListener("mouseup",finishposition);
    canvas.addEventListener("mousemove",draw)
});