let previous_blocks_list_length = 0;
const body = document.getElementById("12")
var fetch_stack = []

adding_event_listeners()
function popup_maker(block_info){

    const main_container = document.createElement("div")
    main_container.id = "container1"
    main_container.style.display = "flex"
    var left_strings = ["Bits","Block Index","Fee","Height","Hash","Main chain","Merkle root","Number of transactions","Previous block","Block size","Time"]
    var right_ids = ["bits","block_index","fee","height","hash","main_chain","mrkl_root","n_tx","previous_block","size","time"]
    var info = [""]
    for(var i=0;i<left_strings.length;i++){
        // var container_name = "inline_container"+i
        const container_name = document.createElement("div")
        container_name.className = "inline_container"
        const left_info = document.createElement("div")
        left_info.id = "lines_left"
        left_info.textContent = left_strings[i]+":" 
        left_info.title = left_strings[i]
        const right_info = document.createElement("div")
        right_info.id = "lines_right"
        right_info.textContent = block_info[right_ids[i]]
        container_name.appendChild(left_info)
        container_name.appendChild(right_info)
        main_container.appendChild(container_name)
    }
    
    return main_container
}

function adding_event_listeners(){
    
    let blocks_for_animation = document.getElementsByClassName("block")

    for(let i=previous_blocks_list_length;i<blocks_for_animation.length;i++){
        
        blocks_for_animation[i].addEventListener("click",()=>{
            var pressed_block = blocks_for_animation[i]

        //close button
            if(document.getElementById("popup")!=undefined){
                const existing_popup = document.getElementById("popup")
                body.removeChild(existing_popup)    
            }
            const popup = document.createElement("div")
            popup.id = "popup"
            const cut_button = document.createElement("button")
            cut_button.id = "button1"
            cut_button.textContent = "╳"
            cut_button.addEventListener("click",()=>{
                body.removeChild(popup)
            })
        //

            if(blocks[blocks_for_animation[i].id]!=undefined){
                var block_info = blocks[blocks_for_animation[i].id]["blocks"][0]
                var main_container = popup_maker(block_info)
                popup.innerHTML=""
                popup.appendChild(main_container)
                const get_raw_json_button = document.createElement("button")
                get_raw_json_button.id = "raw_json_button"
                get_raw_json_button.textContent = "get raw json"
                console.log(get_raw_json_button)
                popup.append(get_raw_json_button)
                get_raw_json_button.addEventListener("click",()=>{
                    // console.log(data)
                    var string_json = JSON.stringify(blocks[blocks_for_animation[i].id],null,2)
                    var new_page = window.open()
                    new_page.document.open()
                    new_page.document.title = blocks_for_animation[i].id +" raw json"
                    new_page.document.write("<pre>"+string_json+"<pre>")
                    new_page.document.close()
                    // new_page.focus()
                })
            }
            else{
                
                const text = document.createElement("div")
                text.textContent = "loading content...."
                text.style.fontSize = "5vh"    
                text.style.marginLeft = "2vh"
                text.style.marginTop = "2vh"
                popup.appendChild(text)
                const get_raw_json_button = document.createElement("button")
                get_raw_json_button.id = "raw_json_button"
                get_raw_json_button.textContent = "get raw json"
                console.log(get_raw_json_button)
                popup.append(get_raw_json_button)
                
                var info = block_fetching(blocks_for_animation[i].id).then(data=>{
                    popup.removeChild(text)
                    get_raw_json_button.addEventListener("click",()=>{
                        console.log(data)
                        var string_json = JSON.stringify(data,null,2)
                        var new_page = window.open()
                        new_page.document.open()
                        new_page.document.write("<pre>"+string_json+"<pre>")
                        new_page.document.close()
                        // new_page.focus()
                    })
                    blocks[blocks_for_animation[i].id] = data
                    console.log(data)
                    var block_info = blocks[blocks_for_animation[i].id]["blocks"][0]
                    var main_container = popup_maker(block_info)
                    popup.appendChild(main_container)
                    
                })
            }
        var rect = pressed_block.getBoundingClientRect()
        console.log("top of pressed block is: "+rect.top)
        gsap.from(popup,{height:"0vh",
                        minWidth:"0vw", 
                        background: "#fffffffd",
                        opacity:"0",
                        background: "#fffffffd"
                    })
                    // popup.appendChild(main_container)
        popup.appendChild(cut_button)
        body.appendChild(popup)
        gsap.to(popup,{
                            
                                height: "70vh",
                                // minWidth: "80vw",
                                top:"10vh",
                                // minWidth:"80vw",
                                width:"80vw",
                                background: "#4a81f7fd",
                                duration:0.44
        })
                            
                        })
        console.log("block pressed!!!!!!!!")
        blocks_for_animation[i].addEventListener("mouseenter",()=>{

            if(blocks[blocks_for_animation[i].id]==undefined){
                // console.log(blocks)
                    // var info = block_fetching(blocks_for_animation[i].id).then(data=>{
                    //     blocks[blocks_for_animation[i].id] = data 
                    //     console.log(blocks_for_animation[i].id+" fetched")
                    // }) 
                    console.log("hopefully doesn't break anything")   
            }
            else{
                console.log("already fetched")
            }
        })
    
        blocks_for_animation[i].addEventListener('mouseenter',() =>{
            gsap.to(blocks_for_animation[i],{height:"40vh",minWidth:"32vh",background: "#6c91ff",width:"32vh",duration:0.02})
            const audio = new Audio("sound.mp3");
            console.log("on",i)
            audio.play();
            
            //this part shouldn't be here 
        })
        blocks_for_animation[i].addEventListener('mouseleave',() =>{    
            gsap.to(blocks_for_animation[i],{height:"25vh",minWidth:"25vh",background: "#2948ff",width:"25vh",duration: 0.02})
            console.log("off")
        })
        blocks_for_animation[i].addEventListener('mouseleave',() =>{    
            blocks_for_animation[i].innerHTML = ""
            var tempelement = document.createElement("p")
            tempelement.textContent = blocks_for_animation[i].id
            blocks_for_animation[i].appendChild(tempelement)
            
        })

        previous_blocks_list_length = blocks_for_animation.length;      
    }
}
    

