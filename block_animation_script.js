let previous_blocks_list_length = 0;
const body = document.getElementById("12")
var fetch_stack = []
adding_event_listeners()
async function adding_event_listeners(){
    
    let blocks_for_animation = document.getElementsByClassName("block")

    for(let i=previous_blocks_list_length;i<blocks_for_animation.length;i++){
        
        blocks_for_animation[i].addEventListener("click",()=>{

            if(document.getElementById("popup")!=undefined){
                const existing_popup = document.getElementById("popup")
                body.removeChild(existing_popup)
            }
        
            const popup = document.createElement("div")
            popup.id = "popup"

            const cut_button = document.createElement("button")
            cut_button.id = "button1"
            cut_button.textContent = "close"
            cut_button.addEventListener("click",()=>{
                body.removeChild(popup)
            })

            //preparing a neat element for displaying all the information
            const main_container = document.createElement("div")
            main_container.id = "container1"
            main_container.style.display = "flex"

            if(blocks[blocks_for_animation[i].id]!=undefined){
                var block_info = blocks[blocks_for_animation[i].id]["blocks"][0]
                
                const bits = document.createElement("div")
                bits.id = "lines"
                bits.textContent = "bits: " + block_info["bits"]
                main_container.appendChild(bits)

                const block_index = document.createElement("div")
                block_index.id = "lines"
                block_index.textContent = "Block index: " + block_info["block_index"]
                main_container.appendChild(block_index)

                const fee = document.createElement("div")
                fee.id = "lines"
                fee.textContent = "fee : " + block_info["fee"]
                main_container.appendChild(fee)

                const height = document.createElement("div")
                height.id = "lines"
                height.textContent = "height : " + block_info["height"]
                main_container.appendChild(height)

                const hash = document.createElement("div")
                hash.id = "lines"
                hash.textContent = "hash : " + block_info["hash"]
                main_container.appendChild(hash)

                const main_chain = document.createElement("div")
                main_chain.id = "lines"
                main_chain.textContent = "main chain : " + block_info["main_chain"]
                main_container.appendChild(main_chain)

                const mrkl_root = document.createElement("div")
                mrkl_root.id = "lines"
                mrkl_root.textContent = "merkle root : " + block_info["mrkl_root"]
                main_container.appendChild(mrkl_root)

                const n_tx = document.createElement("div")
                n_tx.id = "lines"
                n_tx.textContent = "number of transactions : " + block_info["n_tx"]
                main_container.appendChild(n_tx)

                const previous_block = document.createElement("div")
                previous_block.id = "lines"
                previous_block.textContent = "previous block : " + block_info["prev_block"]
                main_container.appendChild(previous_block)

                const b_size = document.createElement("div")
                b_size.id = "lines"
                b_size.textContent = "block size : " + block_info["size"]
                main_container.appendChild(b_size)
                
                const b_time = document.createElement("div")
                b_time.id = "lines"
                b_time.textContent = "time : " + block_info["time"]
                main_container.appendChild(b_time)

                const transactions = document.createElement("div")
                transactions.id = "lines"
                transactions.textContent = "transactions : to be decided"
                main_container.appendChild(transactions)

                popup.appendChild(main_container)
                // text.textContent = blocks[blocks_for_animation[i].id]["blocks"][0]["hash"]
                // popup.appendChild(text)
            }
            else{
                const text = document.createElement("p")
                text.textContent = "loading content...."
                text.style.fontSize = "100px"
                popup.appendChild(text)

                var info = block_fetching(blocks_for_animation[i].id).then(data=>{
                    popup.removeChild(text)
                    blocks[blocks_for_animation[i].id] = data
        
                    var block_info = blocks[blocks_for_animation[i].id]["blocks"][0]
                
                    const bits = document.createElement("div")
                    bits.id = "lines"
                    bits.textContent = "bits: " + block_info["bits"]
                    main_container.appendChild(bits)
    
                    const block_index = document.createElement("div")
                    block_index.id = "lines"
                    block_index.textContent = "Block index: " + block_info["block_index"]
                    main_container.appendChild(block_index)
    
                    const fee = document.createElement("div")
                    fee.id = "lines"
                    fee.textContent = "fee : " + block_info["fee"]
                    main_container.appendChild(fee)
    
                    const height = document.createElement("div")
                    height.id = "lines"
                    height.textContent = "height : " + block_info["height"]
                    main_container.appendChild(height)
    
                    const hash = document.createElement("div")
                    hash.id = "lines"
                    hash.textContent = "hash : " + block_info["hash"]
                    main_container.appendChild(hash)
    
                    const main_chain = document.createElement("div")
                    main_chain.id = "lines"
                    main_chain.textContent = "main chain : " + block_info["main_chain"]
                    main_container.appendChild(main_chain)
    
                    const mrkl_root = document.createElement("div")
                    mrkl_root.id = "lines"
                    mrkl_root.textContent = "merkle root : " + block_info["mrkl_root"]
                    main_container.appendChild(mrkl_root)
    
                    const n_tx = document.createElement("div")
                    n_tx.id = "lines"
                    n_tx.textContent = "number of transactions : " + block_info["n_tx"]
                    main_container.appendChild(n_tx)
    
                    const previous_block = document.createElement("div")
                    previous_block.id = "lines"
                    previous_block.textContent = "previous block : " + block_info["prev_block"]
                    main_container.appendChild(previous_block)
    
                    const b_size = document.createElement("div")
                    b_size.id = "lines"
                    b_size.textContent = "block size : " + block_info["size"]
                    main_container.appendChild(b_size)
                    
                    const b_time = document.createElement("div")
                    b_time.id = "lines"
                    b_time.textContent = "time : " + block_info["time"]
                    main_container.appendChild(b_time)
                    
                    const transactions = document.createElement("div")
                    transactions.id = "lines"
                    transactions.textContent = "transactions : to be decided"
                    main_container.appendChild(transactions)
                    
                    popup.appendChild(main_container)
                })
            }
    
            popup.appendChild(cut_button)
            body.appendChild(popup)
            console.log("block pressed!!!!!!!!")
            
        })
        blocks_for_animation[i].addEventListener("mouseenter",()=>{

            if(blocks[blocks_for_animation[i].id]==undefined){
                // console.log(blocks)
                    var info = block_fetching(blocks_for_animation[i].id).then(data=>{
                        blocks[blocks_for_animation[i].id] = data 
                        console.log(blocks_for_animation[i].id+" fetched")
                    })    
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
    

