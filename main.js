$(document).ready(function () {
    $('.div-2').click(function (e) {
        $(this).toggleClass('rotate')
        let subnav = $(this).parent().siblings().eq(0)
        // let subnav =  $('.div-container').siblings().eq(0)
        subnav.slideToggle(500)
        console.log(subnav)
    });
});

let count = 1
// Set ảnh tự chảy
setInterval(function() {
    let radio = document.getElementById('radio' + count )
    radio.checked = true
    ++count
    if (count>=5) {
        count = 1
    } 
},2000)


let left = document.querySelectorAll('.left')
let right = document.querySelectorAll('.right')
let slider = document.querySelectorAll('.tab_product-slider')
let flag = true

for (let i =0; i < right.length;i++) {
    right[i].onclick = function() {
        if (flag == true) {
            slider[i].classList.remove('margin-right')
            slider[i].classList.add('margin-left')
        } 
        flag = false 
    }
}

for (let i =0; i < left.length;i++) {
    left[i].onclick = function() {
        if (flag == false) {
            slider[i].classList.remove('margin-left')
            slider[i].classList.add('margin-right')
        }  
        flag = true
    }
}

// Đồ gia dụng
let next = document.querySelector('.next')
let pre = document.querySelector('.pre')
let sliderExtra = document.querySelector('.row-extra')
const min = 0
const max = 200
let z =0

next.onclick = function () {
    if (z >-200) {
        z-= 50
        sliderExtra.style.marginLeft = z + '%'
    } 
}

pre.onclick = function () {
    if (z <-50) {
        z+= 50
        sliderExtra.style.marginLeft = z + '%'
    } else {
        z = 0
        sliderExtra.style.marginLeft = -12 + 'px'
    }
}


// next and pre mobile
let nextMoblie = document.querySelector('.next-mobile')
let preMobile = document.querySelector('.pre-mobile')
let z_mobile = 0
nextMoblie.onclick = function () {
    if (z_mobile >-300) {
        z_mobile-= 50
        sliderExtra.style.marginLeft = z_mobile + '%'
    } else {
        z_mobile =0
        sliderExtra.style.marginLeft = -4 + 'px'
    }
    console.log(z_mobile)
}

preMobile.onclick = function () {
    if (z_mobile <-50) {
        z_mobile+= 50
        sliderExtra.style.marginLeft = z_mobile + '%'
    } else {
        z_mobile = 0
        sliderExtra.style.marginLeft = -4 + 'px'
    }
    console.log(z_mobile)
}

// Drag Slider
let container_dragSlider = document.querySelector('.container_dragSlider')
let imgs = document.querySelector('.imgs')
let flagD = false
let leftNeed  // lưu vị trí con chuột trong thẻ div imgs

container_dragSlider.addEventListener('touchstart', e => {
    flagD = true
    leftNeed = e.targetTouches[0].clientX - imgs.offsetLeft
})

window.addEventListener('touchend', e => {
    flagD = false
})


container_dragSlider.addEventListener('touchmove', e => {
    if (flagD == false) 
        return
    else  {
        imgs.style.left = `${e.targetTouches[0].clientX - leftNeed}px`
    }
    checkboundary()
})

function checkboundary() {
    let container_dragSlider_rect = container_dragSlider.getBoundingClientRect()
    let imgs_rect = imgs.getBoundingClientRect()
    console.log(imgs_rect.right)
    console.log(container_dragSlider_rect.right)
    if (imgs.offsetLeft >0) {
        imgs.style.left = '0px'
    } else if (imgs_rect.right < 0) {
        imgs.style.left = `-${container_dragSlider_rect.width}px`
    }
}

// Drag Slider Baner
let outner = document.querySelector('.container-baner-silder')
let inner = document.querySelector('.items-outner')
let flagD2 = false
let leftNeed2  // lưu vị trí con chuột trong thẻ div items-outner.
let marginMove = 0

outner.addEventListener('mousedown',(e,mouse) => {
    flagD2 = true
    leftNeed2 = e.offsetX - inner.offsetLeft
    console.log(flagD2)
})

window.addEventListener('mouseup', e => {
    flagD2 = false
    // console.log(flagD2)
    outner.style.cursor = 'grab'
    console.log(flagD2)

})


outner.addEventListener('mousemove', (e) => {
    if (flagD2 == false) 
        return
    else {
        outner.style.cursor = 'grabling'
        inner.style.left = `${e.offsetX - leftNeed2}px`
        console.log(flagD2)
    }
    checkboundary2()
})

function checkboundary2() {
    let outnerr_rect = outner.getBoundingClientRect()
    let inner_rect = inner.getBoundingClientRect()
    // console.log(inner_rect.right)
    if (inner.offsetLeft >0) {
        inner.style.left = '0px'
    } else if (inner_rect.right < -2531.8125  || inner_rect.right < -860.875) {
        inner.style.left = `-${inner_rect.width-  outnerr_rect.width}px`
    }
    console.log(outnerr_rect.width)
    console.log(inner_rect.right)
}