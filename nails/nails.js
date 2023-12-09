window.addEventListener('load', function () {
    /* --------------------------fadeIn--------------------------------- */
    function fadeIn() {
        let section = document.querySelector("#section-employee");
        let sectionDiv = document.querySelectorAll("#section-employee>div");

        // section-employee의 위치정보
        let sectionPosition = section.getBoundingClientRect().top;//section-employee의 top에서 뷰포트(0,0)까지의 값
        let sectionPosition2 = section.getBoundingClientRect().bottom;//section-employee의 botton에서 (0,0)까지의 값

        //(0,0)부터 top의 높이가 창 화면의 세로길이 / 3 보다 작거나 (0,0)부터 bottom의 높이가 0보다 크거나같을때 show
        if (sectionPosition <= window.innerHeight / 3 && sectionPosition2 >= 0) {
            for (let i = 0; i < sectionDiv.length; i++) {
                // sectionDiv[i].classList.remove('show');
                sectionDiv[i].style.opacity = 1;
            }
            // console.log("window.innerHeight", window.innerHeight / 3);
            // console.log("top", sectionPosition);
            // console.log("bottom", sectionPosition2);
        } else {
            for (let i = 0; i < sectionDiv.length; i++) {
                // sectionDiv[i].classList.remove('show');
                sectionDiv[i].style.opacity = 0;
            }
        }
    }
    window.addEventListener('scroll', fadeIn);

    /* --------------------------pre-btn, next-btn--------------------------------- */

    let preBtn = document.querySelector(".pre-btn");
    let nextBtn = document.querySelector(".next-btn");
    let li = document.querySelectorAll(".nails-room li");
    let imgesLength = li.length;

    let currentIndex = 0; //현재 인덱스
    function changeImage(direction) {
        if (direction === "next") {
            /*다음 버튼을 누르면 현재 인덱스+1 % 이미지길이 즉, 나머지가 인덱스가된다.
            1 % 5 = 1, 2 % 5 = 2... 인덱스가 넘어가도 나머지를 새로운 인덱스로 설정하기 때문에 
            인덱스와 이미지 길이가 같아지면 인덱스가 0으로 돌아간다.*/
            currentIndex = (currentIndex + 1) % imgesLength;
        } else if (direction === "prev") {
            currentIndex = (currentIndex - 1 + imgesLength) % imgesLength;
        }

        /* 변경된 인덱스에 따라 각 이미지의 현재위치에서 이동할 거리를 계산 
        (300px는 각 이미지의 가로 너비) */
        let translateValue = -currentIndex * 300;
        for (let i = 0; i < li.length; i++) {
            li[i].style.transform = `translateX(${translateValue}px)`;
            // console.log(li[i].style.transform);
        }
    }

    preBtn.addEventListener('click', function () {
        changeImage("prev");
    });
    nextBtn.addEventListener('click', function () {
        changeImage("next");
    });

    /* --------------------------toggl--------------------------------- */
    let togglBtn = document.querySelector('.toggl');
    let menu = document.querySelector('.header-menu');
    togglBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        /* classList.toggle(클래스):해당 클래스가 이미 존재하면 제거하고
        존재하지 않으면 추가한다 */
    })

    /* --------------------------img--------------------------------- */
    let img = document.querySelector('#banner img');
    function banner() {
        let width = img.getBoundingClientRect().width;

        let tl = gsap.timeline();
        tl.to('#banner>img:nth-child(5)', {
            x: width * 4,
            opacity: 1,
            duration: 0.3
        })
            .to('#banner>img:nth-child(4)', {
                x: width * 3,
                opacity: 1,
                duration: 0.3
            })
            .to('#banner>img:nth-child(3)', {
                x: width * 2,
                opacity: 1,
                duration: 0.3
            })
            .to('#banner>img:nth-child(2)', {
                x: width,
                opacity: 1,
                duration: 0.3
            })
            .to('#banner>img:nth-child(1)', {
                opacity: 1,
            })
    }
    banner();

    window.addEventListener('resize', banner);
});