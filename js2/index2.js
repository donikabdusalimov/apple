let white_btn = document.querySelector('.btn-white')
let grey_btn = document.querySelector('.btn-grey')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let p = document.querySelector('.prices')
let p2 = document.querySelector('.colors')

let rem = (btn) => {
    btn.classList.remove('btn1')
}

btn1.onclick = () => {
    p.innerHTML = '$1,999'
    btn1.classList.add('btn1')
    rem(btn2)
    rem(btn3)
    rem(btn4)
}
btn2.onclick = () => {
    p.innerHTML = '$2,199'
    btn2.classList.add('btn1')
    rem(btn1)
    rem(btn3)
    rem(btn4)
}
btn3.onclick = () => {
    p.innerHTML = '$2,599'
    btn3.classList.add('btn1')
    rem(btn1)
    rem(btn2)
    rem(btn4)
}
btn4.onclick = () => {
    p.innerHTML = '$3,199'
    btn4.classList.add('btn1')
    rem(btn1)
    rem(btn3)
    rem(btn2)
}

let img = document.querySelector('.img')
let src1 = "img/macgrey.png"
let src2 = "img/macwhite.png"

let rem2 = (btn) => {
    btn.classList.remove('btn-white')
}

grey_btn.onclick = () => {
    img.setAttribute("src", src1)
    p2.innerHTML = "Space Grey"
    grey_btn.classList.add('btn-white')
    rem2(white_btn)
}

white_btn.onclick = () => {
    img.setAttribute("src", src2)
    p2.innerHTML = "White"
    white_btn.classList.add('btn-white')
    rem2(grey_btn)
}


