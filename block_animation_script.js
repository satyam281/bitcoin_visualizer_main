let previous_blocks_list_length = 0;

adding_event_listeners()
function adding_event_listeners(){
    
    let blocks_for_animation = document.getElementsByClassName("block")
    // for (let i=0;i<blocks_for_animation.length;i++){
    //     console.log("in animation loop")
    //             blocks_for_animation[i].addEventListener('mouseenter',() =>{
    //                 gsap.to(blocks_for_animation[i],{height:"40vh",minWidth:"32vh",background: "#6c91ff",width:"32vh",duration:0.1})
    //                 console.log("on")
    //                 // var audio = new Audio("sound.mp3");
    //                 // audio.play();
    //             })
    //             blocks_for_animation[i].addEventListener('mouseleave',() =>{    
    //                 gsap.to(blocks_for_animation[i],{height:"20vh",minWidth:"20vh",background: "#396afc",width:"20vh",duration: 0.1})
    //                 console.log("off")
    //             })
                
    //         }
    for(let i=previous_blocks_list_length;i<blocks_for_animation.length;i++){
        blocks_for_animation[i].addEventListener('mouseenter',() =>{
            gsap.to(blocks_for_animation[i],{height:"40vh",minWidth:"32vh",background: "#6c91ff",width:"32vh",duration:0.1})
            console.log("on")
            var audio = new Audio("sound.mp3");
            audio.play();
        })
        blocks_for_animation[i].addEventListener('mouseleave',() =>{    
            gsap.to(blocks_for_animation[i],{height:"20vh",minWidth:"20vh",background: "#396afc",width:"20vh",duration: 0.1})
            console.log("off")
        })

        console.log(previous_blocks_list_length,blocks_for_animation.length)
        previous_blocks_list_length = blocks_for_animation.length;
        
    }
    // curr_i += count;
}
