let previous_blocks_list_length = 0;
const body = document.getElementById("12")
var fetch_stack = []

function popup_maker(block_info){

    const main_container = document.createElement("div")
    main_container.id = "container1"
    main_container.style.display = "flex"
    
    const bits = document.createElement("div")
    bits.id = "lines"
    bits.textContent = "Bits: " + block_info["bits"]
    main_container.appendChild(bits)

    const block_index = document.createElement("div")
    block_index.id = "lines"
    block_index.textContent = "Block index: " + block_info["block_index"]
    main_container.appendChild(block_index)
    
    const fee = document.createElement("div")
    fee.id = "lines"
    fee.textContent = "Fee : " + block_info["fee"]
    main_container.appendChild(fee)
    
    const height = document.createElement("div")
    height.id = "lines"
    height.textContent = "Height : " + block_info["height"]
    main_container.appendChild(height)
    
    const hash = document.createElement("div")
    hash.id = "lines"
    hash.textContent = "Hash : " + block_info["hash"]
    main_container.appendChild(hash)
    
    const main_chain = document.createElement("div")
    main_chain.id = "lines"
    main_chain.textContent = "Main chain : " + block_info["main_chain"]
    main_container.appendChild(main_chain)

    const mrkl_root = document.createElement("div")
    mrkl_root.id = "lines"
    mrkl_root.textContent = "Merkle root : " + block_info["mrkl_root"]
    main_container.appendChild(mrkl_root)
    
    const n_tx = document.createElement("div")
    n_tx.id = "lines"
    n_tx.textContent = "Number of transactions : " + block_info["n_tx"]
    main_container.appendChild(n_tx)
    
    const previous_block = document.createElement("div")
    previous_block.id = "lines"
    previous_block.textContent = "Previous block : " + block_info["prev_block"]
    main_container.appendChild(previous_block)
    
    const b_size = document.createElement("div")
    b_size.id = "lines"
    b_size.textContent = "Block size : " + block_info["size"]
    main_container.appendChild(b_size)         
    
    const b_time = document.createElement("div")
    b_time.id = "lines"
    b_time.textContent = "Time : " + block_info["time"]
    main_container.appendChild(b_time)
    
    const transactions = document.createElement("div")
    transactions.id = "lines"
    transactions.textContent = "Transactions : to be decided"
    main_container.appendChild(transactions)

    return main_container
}

adding_event_listeners()

// function popup_creator(){
//     //popup: close existing popups
//     //close button: create, append to popup
//     //block fetching: if block present in blocks{} :
//     //                if block not present in blocks{}; 
//     if(document.getElementById("popup")!=undefined){
//                 const existing_popup = document.getElementById("popup")
//                 body.removeChild(existing_popup)    
//     }
//     const popup = document.createElement("div")
//     popup.id = "popup"
    
//     const cut_button = document.createElement("button")
//     cut_button.id = "button1"
//     cut_button.textContent = "X"
//     cut_button.addEventListener("click",()=>{
//         body.removeChild(popup)
//     })
// }
async function adding_event_listeners(){
    
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
            cut_button.textContent = "X"
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
            gsap.to(blocks_for_animation[i],{height:"25vh",minWidth:"25vh",background: "#396afc",width:"25vh",duration: 0.02})
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
    

