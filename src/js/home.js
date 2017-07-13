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
        isImageMsg:false,
        isLt2MMsg:false,
        isRequired:false,
        isUpload:false,
        isFail:false,
        isUploading:false
      };
    },
    methods: {
      allUploadImageFalse(){
        this.isImageMsg=false;
        this.isLt2MMsg=false;
        this.isRequired=false;
        this.isFail=false;
        this.isUploading=false;
        this.isUpload=false;
      },
      handleAvatarSuccess(res, file) {
        this.allUploadImageFalse();
        this.isUpload=true;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isImage) {
          this.allUploadImageFalse();
          this.isImageMsg=true;
        }
        if (!isLt2M) {
          this.allUploadImageFalse();
          this.isLt2MMsg=true;
        }
        return isImage && isLt2M;
      },
      handleAvatarFail(){
          this.allUploadImageFalse();
          this.isFail=true;
      },
      onAvatarProgress(){
          this.allUploadImageFalse();
          this.isUploading=true;
      },
      validateBeforeSubmit() {
	     this.$validator.validateAll().then(result => {
        if (result&&this.isUpload) {
          console.log('From Submitted!');
          return;
        }
        this.allUploadImageFalse();
        this.isRequired=true;
        console.log('Correct them errors!');
      });
	   }
    },
    components:{
    	'el-upload':Upload
    }
})
