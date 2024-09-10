const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://webassets2.starlux-airlines.com/zh-TW/Images/summer_PEN_tcm5-5284.jpg" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'sssefegegegqgeqgqe'
  profile_img.innerHTML =
    '<img src="https://webassets2.starlux-airlines.com/zh-TW/Images/summer_PEN_tcm5-5284.jpg" alt="" />'
  name.innerHTML = 'pin'
  date.innerHTML = 'Oct 18, 2060'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
