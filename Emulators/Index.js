const canvas=document.getElementById("bg")
const ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let particles=[]
for(let i=0;i<120;i++){
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})
}
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let p of particles){
        p.x+=p.vx;p.y+=p.vy
        if(p.x<0||p.x>canvas.width)p.vx*=-1
        if(p.y<0||p.y>canvas.height)p.vy*=-1
        ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,Math.PI*2);ctx.fillStyle="#7fdcff";ctx.fill()
        for(let p2 of particles){
            let dx=p.x-p2.x,dy=p.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
            if(dist<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p2.x,p2.y);ctx.strokeStyle="rgba(127,220,255,0.08)";ctx.stroke()}
        }
    }
    requestAnimationFrame(draw)
}
draw()
