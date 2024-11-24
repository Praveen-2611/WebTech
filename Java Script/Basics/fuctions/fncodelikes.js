let likesBtn=document.getElementById('likes-btn');
let dislikesBtn=document.getElementById('dislikes-btn');
let displayLikes=document.getElementById('likes-display');
let displayDisLikes=document.getElementById('dislikes-display');
let totalDisplay=document.getElementById('total');


let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
let dislikes=localStorage.getItem('dislikes')?localStorage.getItem('dislikes'):0;
let total=localStorage.getItem('total')?localStorage.getItem('total'):0;

displayLikes.textContent=likes;
displayDisLikes.textContent=dislikes;
totalDisplay.textContent=total;

likesBtn.addEventListener('click',function()
{
    likes++;
    localStorage.setItem('likes',likes);
    displayLikes.textContent=localStorage.getItem('likes');

    total++;
    localStorage.setItem('total',total);
    totalDisplay.textContent=total;
})


dislikesBtn.addEventListener('click',function()
{
    dislikes++;
    localStorage.setItem('dislikes',dislikes);
    displayDisLikes.textContent=dislikes;
    total++;
    localStorage.setItem('total',total);
    totalDisplay.textContent=total;
})
