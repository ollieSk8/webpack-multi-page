import Vue from 'vue/dist/vue.common.js';
import { Button } from 'element-ui'
require('../scss/home')
new Vue({
	data(){
		return {
			list:['item1','item2','item4']
		}
	},
	components:{
		'el-button':Button

	}
}).$mount('#app');
