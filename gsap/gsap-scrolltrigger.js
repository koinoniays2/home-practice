gsap.registerPlugin(ScrollTrigger); //플러그인 활성화
gsap.to('.box-3', {
    scrollTrigger: {
        trigger: '.box-4', //box-3을 움직일 트리거=box-4
        start: 'top 50%+=50px',  /*top(box-4의 top이 기준) 50%(기준과 만나는 화면 지점) top과, 화면의 지점이 만나면 애니메이션이 실행됨
                                    '20% 50%' -> 기준이 top에서 20% 내려온다. */
        /* 많이안씀
        toggleActions: 'restart pause resume reverse', /* restart : 시작점이 enter될 때마다 재시작 
                                                pause : 끝나는점을 만나면 애니메이션 멈춤, none: 끝나는 점을 지나쳐도 애니메이션 진행
                        resume : 애니매이션이 끝나기 전 끝나는 점을 만났을 때 끝나는 점이 back되면 계속 실행, none: back되도 멈춰있음
                                            reverse : 시작점이 back되어 기준을 만나면 reverse */
        /* 많이씀
        scrub: true 강제 동기화(토글액션과 같이쓰면 토글액션이 무시됨) 토글액션의 기능을 다 동기화하여 매핑시켜놓음 */
        scrub: 2, // true는 너무 빨리 되기 때문에 부드럽게 할수있다.
        end: '80% 50%',
        markers: true //markers: true로 start(기준), scroller-start(지점) 가이드라인 확인
    },
    x: 500
})