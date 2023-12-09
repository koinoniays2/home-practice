/*gsap.to('.box-1', { // to: ~로 향하다. (대상 .box-1)
            x: 300, // transform: translateX(300px)으로 이동한다.
            duration: 1 // x축으로 이동하는데 걸리는 시간(지속시간)
        }, 1); // 딜레이 1초*/
gsap.from('.box-1', { x: 300, duration: 1 }, 1); //transform: translateX(300px)에서 원래위치로 돌아온다.
gsap.to('.box-1', { y: 300, duration: 1 }, 2); // from이 원래 위치로 돌아온 후 y축으로 300이동
/* from이 원래 위치로 돌아오는 시간=지속시간+딜레이 총 2초이기 때문에 다음에 실행되길 원하면 딜레이 2초를 준다.)
딜레이를 적게 준다면 -> from이 끝나기도 전에 to의 시작으로 동시에 실행되어 대각선으로 이동한다. */

gsap.to('.box-2', {
    x: 500, duration: 1
}, 1)
gsap.to('.box-2', {
    y: 300,
    opacity: 0,
    duration: 1
}, 2)
gsap.to('.box-2', {
    x: 0,
    opacity: 1,
    duration: 1
}, 3)
gsap.to('.box-2', {
    y: 0,
    duration: 1
}, 4)


gsap.from('.box-3', {
    x: 300, //기본 위치 0으로 돌아감
    opacity: 0,
    duration: 1
})
gsap.from('.box-3', {
    x: 600, //x:300으로 돌아감
    duration: 1
}, 1)