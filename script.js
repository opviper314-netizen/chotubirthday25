function startJourney(){
  const song=document.getElementById("song");
  if(song.src) song.play().catch(()=>{});
  document.querySelector(".hero").style.display="none";
  show("birthday");
}
function show(id){
  document.querySelectorAll(".reveal").forEach(x=>x.classList.remove("show"));
  const el=document.getElementById(id);
  el.classList.add("show");
  setTimeout(()=>el.scrollIntoView({behavior:"smooth"}),50);
}
function nextSection(id){show(id)}
let opened=0;
function revealReason(el){
  if(!el.classList.contains("open")){el.classList.add("open");opened++}
  if(opened===4) document.querySelector("#reasons .hint").textContent="You found them all. ♡";
}
function loadPhoto(input,index){
  const file=input.files[0]; if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>document.getElementById("photo"+index).src=e.target.result;
  reader.readAsDataURL(file);
}
function finale(){
  document.querySelectorAll(".screen").forEach(x=>x.style.display="none");
  document.getElementById("finale").classList.add("show");
  window.scrollTo({top:0,behavior:"smooth"});
  burst();
}
function burst(){
  for(let i=0;i<45;i++){
    const s=document.createElement("span");
    s.textContent=["✦","♡","·","✧"][Math.floor(Math.random()*4)];
    s.style.position="fixed";s.style.left="50%";s.style.top="45%";
    s.style.fontSize=(10+Math.random()*22)+"px";s.style.opacity="1";
    s.style.transition="transform 1.5s ease,opacity 1.5s ease";
    document.body.appendChild(s);
    requestAnimationFrame(()=>{
      s.style.transform=`translate(${(Math.random()-.5)*600}px,${(Math.random()-.5)*500}px)`;
      s.style.opacity="0";
    });
    setTimeout(()=>s.remove(),1600);
  }
}
