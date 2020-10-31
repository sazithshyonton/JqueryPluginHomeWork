(function(){

    let left = 0
    let cont = 1
    const imagesToShow = parseInt($(".inner *").length)
    
    setInterval(()=>{
        
        if(cont++ <= imagesToShow){
            $(".inner").css("left",`${left}vw`)
            left -= 100
        }else{
            cont = 1
            left = 0
        }

    },2000)

})()



