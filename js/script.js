const slider = document.querySelector('.gallery');
const secSlider = document.querySelector('.slides-gallery')
const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power2.out"}});
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 2;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});


secSlider.addEventListener('mousedown', e => {
  isDown = true;
  secSlider.classList.add('active');
  startX = e.pageX - secSlider.offsetLeft;
  scrollLeft = secSlider.scrollLeft;
});
secSlider.addEventListener('mouseleave', _ => {
  isDown = false;
  secSlider.classList.remove('active');
});
secSlider.addEventListener('mouseup', _ => {
  isDown = false;
  secSlider.classList.remove('active');
});
secSlider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - secSlider.offsetLeft;
  const SCROLL_SPEED = 2;
  const walk = (x - startX) * SCROLL_SPEED;
  secSlider.scrollLeft = scrollLeft - walk;
});

const toggleGift = document.querySelectorAll('.giftcard-toggle-item');
const toggleCard = document.querySelectorAll('.giftset-card');

function removeActiveClasses(e) {
  e.forEach((e) => {
    e.classList.remove('giftcard-item-active')
    e.classList.remove('active-card')
  })
}

function coffeeAnimation (){
  tl.fromTo('.giftset-card-img', {y:0, rotation: '0deg'}, {y:-10, yoyo: true, repeat: -1})
}

let activeClass = '';



toggleGift.forEach((btn) => {
	btn.addEventListener('click', e => {
		e.preventDefault();
    removeActiveClasses(toggleGift);
    removeActiveClasses(toggleCard);

    btn.classList.add('giftcard-item-active')
    activeClass = Number(btn.innerHTML);
    
    showCard(activeClass)
	})
})

function showCard(i) {
  toggleCard[i-1].classList.add('active-card')
}

coffeeAnimation();

console.log(toggleGift)

