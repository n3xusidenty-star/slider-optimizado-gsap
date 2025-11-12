const data = [
  {
    place:'Switzerland Alps',
    title:'SAINT',
    title2:'ANTONIEN',
    description:'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat...',
    image:'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
    place:'Japan Alps',
    title:'NAGANO',
    title2:'PREFECTURE',
    description:'Nagano Prefecture, set within the majestic Japan Alps...',
    image:'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
    place:'Sahara Desert - Morocco',
    title:'MARRAKECH',
    title2:'MERZOUGA',
    description:'The journey from Marrakech to the tranquil sands of Merzouga...',
    image:'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
    place:'Sierra Nevada - USA',
    title:'YOSEMITE',
    title2:'NATIONAL PARK',
    description:'Yosemite National Park is a showcase of the American wilderness...',
    image:'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  },
  {
    place:'Tarifa - Spain',
    title:'LOS LANCES',
    title2:'BEACH',
    description:'Los Lances Beach in Tarifa is a coastal paradise...',
    image:'https://assets.codepen.io/3685267/timed-cards-5.jpg'
  },
  {
    place:'Cappadocia - Turkey',
    title:'Göreme',
    title2:'Valley',
    description:'Göreme Valley in Cappadocia is a historical marvel...',
    image:'https://assets.codepen.io/3685267/timed-cards-6.jpg'
  },
];

const _ = (id)=>document.getElementById(id);
const cards = data.map((i, index)=>`<div class="card" id="card" style="background-image:url()"></div>`).join('');
const cardContents = data.map((i, index)=>`
  <div class="card-content" id="card-content-">
    <div class="content-start"></div>
    <div class="content-place"></div>
    <div class="content-title-1"></div>
    <div class="content-title-2"></div>
  </div>`).join('');
const slideNumbers = data.map((_, index)=>`<div class="item" id="slide-item-"></div>`).join('');

_('demo').innerHTML = cards + cardContents;
_('slide-numbers').innerHTML = slideNumbers;

const set = gsap.set;
function getCard(i){ return `#card`; }
function getCardContent(i){ return `#card-content-`; }
function getSliderItem(i){ return `#slide-item-`; }

function animate(target, duration, props){
  return new Promise(resolve=>{
    gsap.to(target,{...props,duration,onComplete:resolve});
  });
}

let order=[0,1,2,3,4,5];
let detailsEven=true
