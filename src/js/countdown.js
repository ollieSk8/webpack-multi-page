const CountDown={
	 template:'<div><span class="count">{{time.hour}}</span>:<span class="count">{{time.min}}</span>:<span class="count">{{time.sec}}</span></div>',
	 data(){
	 	return {
	 		diff:0,
	 		startTimeStmp:0,
	 		endTimeStmp:0,
	 		timer:null,
	 		time:{
	 			hour:'00',
				min:'00',
				sec:'00',
	 		}
	 	}
	 },
	 props: {
	  startTime: {
	    type: String
	  },
	  endTime: {
	    type: String
	  },
	  currentTime:{
	  	type:Number
	  }
	},
	methods:{
		format_to_timerstmp(val){
			return new Date(val).getTime();
		},
		go(){
			this.runtime();
		},
		toDoubleNumber(str){
			 var _num=str;
			 if(_num<10){
		         _num='0'+_num;    
		     }else{
		         _num=''+_num;    
		     }
		     return _num;   
		},
		runtime(){
			this.timer=setInterval(()=>{
				this.diff-=1000;
				if(this.diff<=0){
					this.$emit('time_end');
					clearInterval(this.timer);
				}else{
					this.countDiff(this.diff);
				}
			},1000);	
		},
		countDiff(diff){
			var _diff=diff;
			var _hour=Math.floor(_diff/(1000*60*60));//小时

			_diff-=_hour*(1000*60*60);

			var _min=Math.floor(_diff/(1000*60));//分钟

			_diff-=_min*(1000*60);

			var _sec=Math.floor(_diff/(1000));//秒

			this.time.hour=this.toDoubleNumber(_hour);
			this.time.min=this.toDoubleNumber(_min);
			this.time.sec=this.toDoubleNumber(_sec);
		}
	},
	mounted () {
        this.startTimeStmp=this.format_to_timerstmp(this.startTime);
		this.endTimeStmp=this.format_to_timerstmp(this.endTime);
		console.log(this.currentTime,this.endTimeStmp)
		if(this.currentTime>this.endTimeStmp){
			console.log('活动结束了')
		}else if(this.currentTime>this.startTimeStmp&&this.currentTime<this.endTimeStmp){
			this.diff=this.endTimeStmp-this.currentTime;
			this.go();
		}else{
			console.log('活动未开始')
		}
    }
}
export default CountDown;