function adding_event_listeners(){
    
    let blocks_for_animation = document.getElementsByClassName("block")
    for (let i=0;i<blocks_for_animation.length;i++){
        console.log("in animation loop")
                blocks_for_animation[i].addEventListener('mouseenter',() =>{
                    gsap.fromTo(blocks_for_animation[i],{height:"20vh",minWidth:"16vh",width:"16vh"},{height:"40vh",minWidth:"32vh",width:"32vh",duration:0.06})
                    console.log("on")
                })
                blocks_for_animation[i].addEventListener('mouseleave',() =>{    
                    gsap.fromTo(blocks_for_animation[i],{height:"40vh",minWidth:"32vh",width:"32vh"},{height:"20vh",minWidth:"16vh",width:"16vh",duration: 0.06})
                    console.log("off")
                })
            }
}
