import Vue from 'vue/dist/vue.common.js';
import CountDown from './CountDown.js'
new Vue({
	data(){
		return {
			msg:'hello foo1'
		}
	},
	methods:{
		time_end(){
			console.log('end');
		}
	},
	created(){
		
	},
	components:{CountDown}
}).$mount('#app');
