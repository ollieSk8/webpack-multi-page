import Vue from 'vue/dist/vue.common.js';
import { Button,Dialog } from 'element-ui'
new Vue({
	data(){
		return {
			list:['about1','about2','about3','about4'],
			dialogVisible: false
		}
	},
	methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
	components:{
		'el-button':Button,
		'el-dialog':Dialog
	}
}).$mount('#app');