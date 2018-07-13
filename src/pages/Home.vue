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
				engiList:[
					{firstClass:'资料员',secondClass:['专业管理实务','基础知识']},
					{firstClass:'施工员',secondClass:['土建','设备安装','市政','装饰']},
					{firstClass:'材料员',secondClass:['专业基础知识','专业管理实务']},
					{firstClass:'标准员',secondClass:['专业基础知识','专业管理实务']},
					{firstClass:'质量员',secondClass:['土建','市政','设备安装','装饰']},
					{firstClass:'安全员',secondClass:['专业基础知识','专业管理实务']},
					{firstClass:'机械员',secondClass:['专业基础知识','专业管理实务']},
					{firstClass:'劳务员',secondClass:['专业基础知识','专业管理实务']}
					]
					
			}
		},
		components: {
			SimpleHeader,
			HomeSwiper,
			Engineer
		},
		created () {
			this.$store.commit('clockDown');//启动考试倒计时
		}
	}
</script>

<style lang="scss" scoped>

.engineer-list{
	overflow:hidden;
	margin-bottom: 1.9rem;
	@include border-top;
	.engineer-box{
		width:50%;
		float: left;		
		box-sizing: border-box;
		&:nth-child(2n){			
			border-left: 1px solid $border-grey;			
		}
	}
}

</style>

