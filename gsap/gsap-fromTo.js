/*
    gsap.fromTo('.box-1', 
    {y: 300}, {duration:2, x:500, y:0});
    //{시작점}. {끝나는점}
    */

//응용
let tl = gsap.timeline();
tl.fromTo('.box-1',
    { y: 100 }, {
        duration: 2, x: 500, y: 0
})
    .fromTo('.box-1',
        { y: 0 }, {
            duration: 2, x: 300, y: 0, delay: 1
    })
tl.to('.box-1', {
    duration: 1, x: 0, y: 0
})