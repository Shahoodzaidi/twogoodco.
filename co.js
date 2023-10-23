
function locoanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoanimation()
 
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y,
            
        })
    })
    document.querySelector(".content").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform: `translate(-50%,-50% )`,
            opacity:1,
            
        })
    
    })
    document.querySelector(".content").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform: `translate(-50%,-50% )`,
            opacity:0,
        })
    
    })
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor1",{
            left:dets.x,
            top:dets.y,
            
        })
    })
    document.querySelector("#crsr2").addEventListener("mouseenter",function(){
        gsap.to(".cursor1",{
            transform: `translate(-50%,-50% )`,
            opacity:1,
        })
    
    })
    document.querySelector("#crsr2").addEventListener("mouseleave",function(){
        gsap.to(".cursor1",{
            transform: `translate(-50%,-50% ) 0pacity(0)`,
            opacity:0,
            
        })
    
    })
}
cursorAnimation()
 function animation(){
    
gsap.from(".page1 #change",{
    y:-800,
    durtion:1.1,
    opacity:0,
    delay:0.4,
   
    scrub:2,
  
})
gsap.from(".page1 #the",{
    y:400,
    durtion:1.1,
    delay:0.6,
    opacity:0,
    scrub:2,
    
  
})
gsap.from(".page1 #course",{
    y:400,
    durtion:1.1,
    opacity:0,
    delay:0.8,
    scrub:2,
   
    
  
})


gsap.to(".nav-part2 .links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:".nav-part2 .links",
        scroller:".main",
        start:"top 0",
        end:"top -5%",
        scrub:true,

    }
    
  
})
gsap.from(" #elem1 img",{
    scale:2,
   opacity:0,
    scrollTrigger:{
      trigger:"#elem1 img",
      scroller:".main",
      start:"top 30%",
      end:"top -8%",
      

    }
    
})
gsap.from(" #elem2 img",{
    scale:2,
   opacity:0,
   delay:.2,
    scrollTrigger:{
      trigger:"#elem1 img",
      scroller:".main",
      start:"top 30%",
      end:"top -8%",
      

    }
    
})
gsap.from(" #elem3 img",{
    scale:2,
   opacity:0,
   delay:.3,
    scrollTrigger:{
      trigger:"#elem1 img",
      scroller:".main",
      start:"top 30%",
      end:"top -8%",
      

    }
    
})
gsap.from(" #crsr1 img",{
    scale:2,
   opacity:0,
   duration:1.5,
    scrollTrigger:{
      trigger:"#crsr1 img",
      scroller:".main",
      start:"top 80%",
      end:"top -8%",
      

    }
    
})
gsap.from(" #crsr2 img",{
    scale:2,
   opacity:0,
   delay:.6,
   duration:1.5,
    scrollTrigger:{
      trigger:"#crsr2 img",
      scroller:".main",
      start:"top 80%",
      end:"top -8%",
      
      

    }
    
})


}
animation()