window.addEventListener('load', function () {
    let tl = gsap.timeline();
    tl.to('.section1>.background', {
        duration: 2,
        scale: 1,
        ease: 'power2.out'
    })

    let tl1 = gsap.timeline();
    tl1.from('.section1 h1>span:nth-child(2)', {
        duration: 1,
        x:-500,
        ease: 'power2.out'
    })
    .to('.section1 h1>span:nth-child(2)', {
        opacity: 0,
    })
    .to('.section1 h1>span:nth-child(2)', {
        opacity: 1,
    })
    
    gsap.from('.section1 h1>span:nth-child(1)',{
        duration: 1,
        y: -500
    });

    gsap.from('.section1 h1>span:nth-child(3)',{
        duration: 1,
        x: 500
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.section2>h1',{
        scrollTrigger: {
            trigger: '.section2',
            start: 'top-=100 0',
            end: '50%-=100 50%',
            scrub: 2,
        },
        x: -1500
    });

    gsap.from('.section3>h1',{
        scrollTrigger: {
            trigger: '.section3',
            start: 'top-=100 0',
            end: '50%-=100 50%',
            scrub: 2,
        },
        x: 1500
    });
});