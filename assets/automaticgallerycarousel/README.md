# ANIMATED HORIZONTALLY SLIDER 

## HTML
    <div class="slider">
        <div class="inner">
            <imgs>
        </div>
    </div>

## CSS
    body {
        overflow-x: hidden;
    }
    .inner {
      position: relative;
      white-space: nowrap;
      transition: all 1s ease;
    }
    .inner img {
      width: 100vw;
    }
    
## JQUERY & JS

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
