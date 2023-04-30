function toggle(el) {
  el.style.display = (el.style.display == 'block') ? 'none' : 'block'
}
  
/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;