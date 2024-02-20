const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
















function videoAnimation() {
    let playBtn = document.getElementById('play')
    let videoContainer = document.querySelector('.video-container')




    videoContainer.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1
        })
    })

    videoContainer.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            opacity: 0,
            scale: 0
        })
    })

    videoContainer.addEventListener('mousemove', function (event) {

        gsap.to(playBtn, {
            scale: 1,
            left: event.x - 90,
            top: event.y - 330

        })

    })
}
videoAnimation()

function loadingAnimation() {
    gsap.from('.page1 h1', {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 1
    })
    gsap.from('.page1 .video-container ', {
        scale: .9,
        opacity: 0,
        delay: 0.8,
        duration: 1
    })
}
loadingAnimation()

let imgages=[

    {img:"https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {img:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    , {img:"https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {img:"https://images.unsplash.com/photo-1609172795052-05bf80681031?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


imgages.forEach((item)=>{
    let createImage=document.createElement("div")
    createImage.setAttribute("class",'child')
  
let page3=document.querySelector('.page3')

    let createImag=document.createElement('img')
    createImag.setAttribute('src',`${item.img}`)
createImage.appendChild(createImag)
console.log(createImage)


page3.appendChild(createImage)


})


let childs = document.querySelectorAll('.child')



childs.forEach((child) => {


    child.addEventListener("mouseenter", function (e) {
        gsap.to('#cursor', {
            transform: "translate(-50%,-50%)   scale(1)"

        })
    })



    child.addEventListener("mouseleave", function (e) {
        gsap.to('#cursor', {
            transform: "translate(-50%,-50%)   scale(0)"

        })
    })


    child.addEventListener("mousemove", function (e) {
        gsap.to('#cursor', {
            transform: "translate(-50%,-50%)   scale(1)",
            left: e.x,
            top: e.y
        })
    })
}

)

