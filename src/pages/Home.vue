<template>	
	<div>
		<simple-header :title="title"></simple-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<div class="engineer-list">
			<engineer class="engineer-box"
				v-for="(item,index) of engiList" 
				:key="index" 
				:firstClass="item.firstClass"
				:secondClass="item.secondClass"></engineer>
		</div>		
	</div>
	
</template>

<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader' 
	import HomeSwiper from './home/HomeSwiper'	
	import Engineer from './home/Engineer'	
	export default {
		name: 'Home',
		data () {
			return {
				title: '智来天扬智慧移动考试系统',
				swiperList:[
					{id:1,img:require('../assets/images/swiper1.jpg')},
					{id:2,img:require('../assets/images/swiper2.jpg')}
					],
				engiList:[]
					
			}
		},
		components: {
			SimpleHeader,
			HomeSwiper,
			Engineer
		},
		methods: {
			getTestPaper(){			
				JSI.getExamTemplate((res)=>{					
					res.type_num = "单选题（"+res.pt_single_num+"）多选题（"+res.pt_multi_num+"）判断题（"+res.pt_tf_num+"）";
					res.total_score = res.pt_single_num*res.pt_single_score
					+res.pt_multi_num*res.pt_multi_score+res.pt_tf_num*res.pt_tf_score;
					this.$store.commit('initExamData',res);
					this.$store.commit('clockDown');//启动考试倒计时
				});
			}
		},
		created () {
			//从本地读取用户			
			let userInfo = this.$store.state.userInfo
			if(!userInfo){
				let accessToken = window.localStorage.getItem("accessToken");
				this.$store.dispatch("setLocalUser",JSON.parse(accessToken));
			}
			//获取所有一级分类和二级分类
			if(this.$store.state.postClz.length>0){
				this.engiList = this.$store.state.postClz;
			}else{
				JSI.getPostKnowList((params)=>{
					console.log("getPostKnowList:"+JSON.stringify(params));
					this.engiList = params;
					this.$store.commit('setPostClz',params);//将所有分类放到缓存中
					/*if(this.$store.state.pt_info.submit_date==null){
						this.getTestPaper();
					}*/
				})	
				if(this.$store.state.pt_info.submit_date==null){
					this.getTestPaper();
				}
			}

			//获取考试信息【考试时间、答题时间等】，设置到state中
			//if(this.$store.state.pt_info.submit_date==null){//尚未考试
				/*let pt_info = {
						pt_name:"2018年资料员专业考试试题",				
						pt_single_num:30,
						pt_single_score:1,
						pt_multi_num:20,
						pt_multi_score:2,
						pt_tf_num:20,
						pt_tf_score:1.5,				
						answer_time:"120",
						type_num:"单选题（30）多选题（20）判断题（20）",
						total_score:100,
						intro:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。",
						exam_date:'2018-07-19 15:05:00',
						submit_date:null
					}*/
				
				
			//}
		}
	}
</script>

<style lang="scss" scoped>

.engineer-list{
	overflow-y:scroll;
	height: 6.0rem;
	@include padlf40;
	.engineer-box{
		width:50%;
		float: left;		
		box-sizing: border-box;	
	}
}

</style>

