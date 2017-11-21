import Vue from 'vue'
import App from '../components/app.vue'

const id = 'vue-mall-spider' + (~new Date())
const div = document.createElement('div')
div.setAttribute('id',id)
document.querySelector('body').appendChild(div)

new Vue({
	el: '#' + id,
	render: _ => _(App)
})









