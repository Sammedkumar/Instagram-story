var arr = [
    {dp:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",img:"https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",img:"https://media.istockphoto.com/id/1413764595/photo/successful-mature-business-woman-looking-at-camera.webp?b=1&s=612x612&w=0&k=20&c=d1ygKon1DJE8LZ5KXDZoZ6QEp_vKBu1NYfmqjiXRYuQ="},

];

var clutter = " ";

arr.forEach(function(val,index){
    clutter += `<div class="story">
                    <img id ="${index}" src="${val.dp}" alt="">
                </div>`;
})

document.querySelector('.storyhead').innerHTML = clutter;

var grow =0;
document.querySelector(".storyhead").addEventListener("click",function(abc){

    document.querySelector(".fullscrn").style.display="initial";
    document.querySelector(".fullscrn").style.backgroundImage=`url(${arr[abc.target.id].img})`
   
    setTimeout(function(){
        document.querySelector(".fullscrn").style.display ="none";
    },2000)

    if(grow<100){
    setInterval(function(){
        document.querySelector(".growth").style.width =`${grow}%`;
        grow++;
    },20)
}else{
    grow = 0;
}
});