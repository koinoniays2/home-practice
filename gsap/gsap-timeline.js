let tl1 = gsap.timeline();
tl1.to('.box-1', {
    duration: 1, x: 100
})
    .to('.box-1', {
        duration: 1,
        backgroundColor: "red"
    })
    .to('.box-1', {
        duration: 1,
        x: 0,
        rotation: -360,
        backgroundColor: "white"
    });
// 딜레이 시간을 "+=1" 이런식으로 누적하면 차례대로 딜레이 된다.
/* gsap.to와 tl.to의 다른점: 
gsap.to가 단독적으로 쓰는 것이라면,
tl은 .to를 이어붙여서 차례대로 실행할 수 있다. */

let tl2 = gsap.timeline();
tl2.to('.box-2', {
    duration: 3,
    x: 500
})
    .to('.box-2', {
        duration: 1,
        rotation: 360
    }, "-=3") //-3초 됐기때문에 x:500가 3초 지속 되면서 이동할때 rotation이 1초 지속 되면서 이동한다.
    .to('.box-2', {
        duration: 1,
        backgroundColor: 'pink'
    })
    .to('.box-2', {
        duration: 1,
        backgroundColor: "green",
        x: 0
    })