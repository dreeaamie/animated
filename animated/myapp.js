
function buttonanimation(){
    var videocontainer = document.querySelector("#video-play");
    var playbutoon=document.querySelector("#play")
    videocontainer.addEventListener("mouseenter", function() {
        gsap.to(playbutoon, {
            scale: 1,
            opacity: 1,
        })
    })
    videocontainer.addEventListener("mouseleave" ,function(){
        gsap.to(playbutoon, {
            scale: 0,
            opacity: 0,
        })
    })
    videocontainer.addEventListener("mousemove" ,function(dets){
        gsap.to(playbutoon, {
            left:dets.x,
            top:dets.y,
        })
    })
}
buttonanimation()

function loadheading(){
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:0.9,
    delay:0.10,
    stagger:0.3,
})
}
loadheading()

function loadvideo(){
    gsap.from("#page1 #video-play",{
        scale:0.8,
       opacity:0,
        duration:0.9,
        delay:1,
    })
    }
    loadvideo()
