let headerCloud = [...document.querySelectorAll('.header__cloud')]
let headerBoat = document.querySelector('.header__boat')
window.addEventListener('scroll', () => {
    // console.log(this,scrollY);
    headerCloud.forEach(clouds => {
        let speed = clouds.getAttribute('data-speed')

        clouds.style.transform = `translateX(${this.scrollY * speed}px)`
        headerBoat.style.transform = `translateX(${this.scrollY * speed}px)`
    });
})

// Parallax

let h1 = document.querySelector(".header__title")

let txt = h1.innerHTML
h1.innerHTML = ""

function str(x = 0) {
    h1.innerHTML = h1.innerHTML + txt[x]
    x++

    if (x < txt.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }
}
str()


let parallaxBox = document.querySelector('.parallax__box')
let parallaxBall  = [...document.querySelectorAll('.parallax__ball')]
parallaxBox.addEventListener('mousemove', (e) => {
    parallaxBall.forEach(balls => {
        const speed = balls.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 30
        const h = (window.innerHeight - e.pageY * speed) / 30
        balls.style.transform = `translate(${x}px, ${h}px)`
     })
    });


    let timer = document.querySelector('.timer')
    let timerNum = timer.querySelectorAll('.timer__card-num')
    
    window.addEventListener('scroll', function scrollTimer() {
        if (this.scrollY >= timer.offsetTop - timer.offsetHeight * 1.4) {
            timerStop()
            this.removeEventListener('scroll', scrollTimer)
        }
    })
    
  function timerStop() {
    for (let i = 0; i < timerNum.length; i++) {
        let count = +timerNum[i].getAttribute('data-num')
        function calcNum(k = 0) {
            timerNum[i].innerHTML = k
            k++
            if (k <= count) {
                setTimeout(() => {
                    calcNum(k)
                }, 5);
            }
        }
        calcNum()
    }
  }

let timerBtn = document.querySelectorAll('.timer__card-btn')

timerBtn.forEach(btns => {
    btns.addEventListener('mouseover', () => {
            btns.style.background = 'blue'
            btns.style.color = 'white'
    })
    btns.addEventListener('mouseout', () => {
        btns.style.background = 'white'
        btns.style.color = 'black'
})
});