const search=document.getElementById("search")
search.addEventListener("keydown",e=>{
    if(e.key==="Enter"&&search.value.trim()!==""){
        window.open("https://duckduckgo.com/?q="+encodeURIComponent(search.value),"_blank")
    }
})

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

const overlay=document.getElementById("movieOverlay")
const frame=document.getElementById("movieFrame")
const gamesGrid=document.getElementById("gamesGrid")

/*
const gamesList=[
    {name:"Minecraft",url:"https://www.minecraft.net/en-us",logo:"https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"},
    {name:"Fortnite",url:"https://www.epicgames.com/fortnite/en-US/home",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Fortnite_cover.jpg/220px-Fortnite_cover.jpg"},
    {name:"League of Legends",url:"https://www.leagueoflegends.com",logo:"https://upload.wikimedia.org/wikipedia/en/7/77/League_of_Legends_cover.jpg"},
    {name:"Valorant",url:"https://playvalorant.com",logo:"https://upload.wikimedia.org/wikipedia/en/9/90/Valorant_cover.jpg"},
    {name:"Roblox",url:"https://www.roblox.com",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Roblox_Logo.svg/220px-Roblox_Logo.svg.png"},
    {name:"Among Us",url:"https://www.innersloth.com/gameAmongUs.php",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Among_Us_cover_art.png/220px-Among_Us_cover_art.png"},
    {name:"Call of Duty",url:"https://www.callofduty.com",logo:"https://upload.wikimedia.org/wikipedia/en/6/6f/Call_of_Duty_Modern_Warfare_II.jpg"},
    {name:"CS:GO",url:"https://blog.counter-strike.net",logo:"https://upload.wikimedia.org/wikipedia/en/3/3b/CSGO_Logo.png"},
    {name:"Genshin Impact",url:"https://genshin.hoyoverse.com",logo:"https://upload.wikimedia.org/wikipedia/en/0/0c/Genshin_Impact_cover.png"},
    {name:"Apex Legends",url:"https://www.ea.com/games/apex-legends",logo:"https://upload.wikimedia.org/wikipedia/en/9/96/Apex_Legends_cover.jpg"},
]

gamesList.forEach(game=>{
    const div=document.createElement("div")
    div.className="gameLogo"
    div.innerHTML=`<img src="${game.logo}" alt="${game.name}"><div style="font-size:10px;margin-top:4px">${game.name}</div>`
    div.addEventListener("click",()=>{
        frame.src=""
        setTimeout(()=>{
            frame.src=game.url
            frame.classList.remove("loaded")
            setTimeout(()=>frame.classList.add("loaded"),50)
        },50)
        gamesGrid.style.display="none"
    })
    gamesGrid.appendChild(div)
})
*/
