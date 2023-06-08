function toggle(el) {
  el.style.display = (el.style.display == 'block') ? 'none' : 'block'
}
  
/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close p-3" data-bs-dismiss="alert"><svg stroke="black" fill="black" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
    appendAlert('Заказ оформлен!', 'success')
})
}