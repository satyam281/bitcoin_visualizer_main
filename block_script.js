class block{
    // contains block hash, block height, number of transactions, transactions details in a list(?), and full json
    block(){}
}


var block_main = document.getElementById("blocks_main_1")
let isDown = false;
let startX;
let scrollleft;


block_main.addEventListener('mousedown',(e) =>{
    isDown = true;
    // console.log(e.pageX)
    startX = e.pageX - block_main.offsetLeft
    scrollleft = block_main.scrollLeft
    
})

block_main.addEventListener('mouseleave',() =>{
    isDown = false
})

block_main.addEventListener('mouseup',() =>{
    isDown = false
})

block_main.addEventListener('mousemove',(e) =>{
    if(!isDown){ return;}
    e.preventDefault()

    const x = e.pageX - block_main.offsetLeft
    const walk = x - startX
    console.log(walk)
    block_main.scrollLeft = scrollleft - walk

})

// console.log(block_main)

block_main.addEventListener("scroll",insert_Blocks);


function block_fetching(block_height){
    var block_hash = "00000000000000000002cb1c80ef783f6445a4e6a5ae5bbcfa4ff1d693bc6985"
    var api_url = "https://corsproxy.io/?https://blockchain.info/rawblock/"+block_hash
    const api_key = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkFQSSJ9.eyJhdWQiOiJtZXJjdXJ5IiwidWlkIjoiY2FiNmEyYTgtMmNkYi00NzExLWE4NTctNDhjNmQxYzEwZDQ2IiwiaXNzIjoiYmxvY2tjaGFpbiIsInJkbyI6dHJ1ZSwiaWF0IjoxNjkxNzM0NDkyLCJqdGkiOiIwYTYwM2ExNy1kZmUyLTQwYmEtOGMzYy00ZTUzYzYwZjMxOTgiLCJzZXEiOjY5NjkyNDQsIndkbCI6ZmFsc2V9.IP/IDFLiRx9jfhFtqr2AS20QyzZAqi7DjK6Xvobl9297AWtiC00zwTE2syaGB+sLwmD6ocdV4twjqPX7XbTa7TE="
    headers = {"Authorization":"Bearer"+api_key}
}

var latest_block_height = 807597      // Fetch this from Api every one day
var previous_block_height = latest_block_height
var blocks = [1,2,3,4,5,6,7,8];       // contains 8 blocks that load without scrolling
for (var i=1;i<9;i++){
    const text_stuff = document.createElement("p");
    text_stuff.textContent = previous_block_height
    previous_block_height -=1
    const current_block = document.getElementById(i)
    current_block.appendChild(text_stuff)
}

function insert_Blocks(){
    // console.log(blocks_for_animation.length)
    var scroll_left = block_main.scrollLeft
    var scroll_width = block_main.scrollWidth
    var diff = scroll_width - scroll_left
    var width = block_main.clientWidth
    
    if(diff<2000){
        var temp = blocks[blocks.length -1]+1
        var newBlockID = temp
        const newBlock = document.createElement("block")
        newBlock.id = temp
        
        const block_height = previous_block_height
        previous_block_height-=1
        const text_stuff = document.createElement("p")
        text_stuff.textContent = block_height
        newBlock.appendChild(text_stuff)
        
        blocks[blocks.length] = temp
        newBlock.className = "Block"
        block_main.appendChild(newBlock)

        let blocks_total = document.getElementsByClassName("block")
        console.log(blocks_total)
        adding_event_listeners()
    }
    // console.log(scroll_width + " " + scroll_left + " "+ diff)
}
