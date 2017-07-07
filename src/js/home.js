import Vue from 'vue';
import Quill from 'quill';
new Vue({
	data(){
		return {
			html:'',
			content:''
		}
	},
	mounted(){
	  var _this=this;
	  var toolbarOptions = [
	    [{ 'header': [1, 2, 3, false] }],
	  	['bold', 'italic', 'underline', 'strike']

	  ];
	  var options = {
		  // debug: 'info',
		  placeholder: 'Compose an epic...',
		  theme: 'snow',
		  modules: {
		    toolbar: toolbarOptions
		  }
     };

     var quill = new Quill('#editor',options);
	  quill.on('text-change', function(delta, oldDelta, source) {
		 if (source == 'user') {
		 	
		   _this.html=quill.root.innerHTML
		   //var delta = quill.getContents();
		   _this.content=quill.container.firstChild.innerHTML
		   console.log(_this.html)
		 }
	  });
	}
}).$mount('#app');
