import Vue from 'vue/dist/vue.common.js';
import $ from 'jquery';
import baseUrl from './config';
import hello from '../component/hello'
new Vue({
	data(){
		return {
			msg:'hello foo1'
		}
	},
	methods:{
		clickMe(){
			alert('click');
		}
	},
	created(){
		console.log(baseUrl);
		$('.move').css('color','#f00');
	},
	components:{hello}
}).$mount('#app');
