import Vue from 'vue';
import {Upload} from 'element-ui';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.use(Upload)
new Vue({
	el:'#app',
	data() {
      return {
        imageUrl: '',
        imageUrlBol:false,
        isImageType:false,
        isImageSize:false
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
      	this.isImageType=false;
        this.isImageSize=false;
        this.imageUrlBol=false;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.isImageType=true;//格式错误信息展示
          this.imageUrlBol=false;//是否被需要隐藏
          this.isImageSize=false;//大小限制隐藏
        }
        if (!isLt2M) {
          this.isImageType=false;
          this.isImageSize=true;
          this.imageUrlBol=false;
        }
        return isJPG && isLt2M;
      },
      validate() {
	      this.$validator.validateAll().then(result => {
	          if(this.imageUrl==''){
	          	this.imageUrlBol=true;
	          	this.isImageType=false;
	          	this.isImageSize=false;
	          }else{
	          	this.imageUrlBol=false;
	          }
	      });
	  }
    },
    components:{
    	'el-upload':Upload
    }
})
