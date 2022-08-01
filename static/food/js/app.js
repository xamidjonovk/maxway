let buttonMain = document.querySelector('button.main span')
buttonMain.addEventListener('click',()=>{
  buttonMain.classList.toggle('show')
  document.querySelector('.main__menu').classList.toggle('show')
  document.querySelector('button.main').classList.toggle('show')
})

let filtbtn =document.querySelectorAll('.filter button')


let row = document.querySelectorAll('.slide .row')
let title = document.querySelectorAll('.slide .big__title')
let sbtn = document.querySelectorAll('.slide__btn')

function modal() {
  document.querySelector('.modal').classList.toggle('modalShow')
}


function clear() {
  document.querySelector('.modal .row').classList.toggle('clear')
}
// function order() {
//   document.querySelector('.modal .row').classList.toggle('order')
// }

  filtbtn.forEach(i=>{
    i.addEventListener('click',(e)=>{
      document.querySelector('.filter button.active').classList.remove('active')
      i.classList.add('active')
      var link = i.getAttribute('data-id')

        row.forEach(rows => {
          if (link == 'all'){
              rows.style.display = 'flex'
          } else if (rows.classList.contains(link)){
              rows.style.display = 'flex'
          } else {
              rows.style.display = 'none'
          }
      })
        title.forEach(title => {
          if (link == 'all'){
              title.style.display = 'block'
          } else if (title.classList.contains(link)){
              title.style.display = 'block'
          } else {
              title.style.display = 'none'
          }
      })
      if (window.innerWidth<=766) {
        sbtn.forEach(sbtn => {
          if (link == 'all'){
              sbtn.style.display = 'block'
          } else if (sbtn.classList.contains(link)){
              sbtn.style.display = 'block'
          } else {
              sbtn.style.display = 'none'
          }
        })
      }
    })
  })

  sbtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
      var b = btn.getAttribute('data-id')

      row.forEach(rows => {
        if (rows.classList.contains(b)){
            rows.classList.toggle('open')
          }
    })
    })
  })

let mobBtn = document.querySelector('.mob__menu--btn')
let mobBtnAdd = document.querySelector('.mob__menu--btn.add')

mobBtn.addEventListener('click',()=>{
  document.querySelector('ul.point').classList.toggle('ulList')
})
mobBtnAdd.addEventListener('click',()=>{
  document.querySelector('ul.addition').classList.toggle('ulList')
})

// let boxBtn = document.querySelectorAll('.box__btn')
// let modaltitle = document.querySelector('.modal .box__title')
// let modaltext = document.querySelector('.modal .box__text')
// let modalcost = document.querySelector('.modal .box__cost')
// let coltitle = document.querySelector('.col-6 .box__title')
// let coltext = document.querySelectorAll('.col-6 .box__text')
// let colcost = document.querySelectorAll('.col-6 .box__cost')


//   boxBtn.forEach(boxbtn=>{
//     boxbtn.addEventListener('click',()=>{
//       modaltitle.innerHTML += coltitle
//       // modaltext.innerHTML += coltext
//       // modalcost.innerHTML += colcost
//       // coltitle.forEach(t=>{
//       //   modaltitle.innerHTML += coltitle
//       // })
//     })
//   })
// console.log(coltitle)
// console.log(coltext)
// console.log(colcost)


// var total = document.querySelector('.total .cost')
// var shopSpan = document.querySelector('.shopSpan')
// var spans = shopSpan.getElementsByTagName("span");

//   shopSpan.innerHTML = total
//   console.log(total)