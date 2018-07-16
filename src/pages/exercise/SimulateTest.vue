<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<ul class="list">
				<li class="list-item"
					v-for="(item,index) of list"
					:key="item.id">
					<router-link 
						:to="'/testStart/'+item.id" 
						class="list-item-link">
						{{item.pt_name}}
					</router-link>
					<button
						v-show="item.status==1" 					
						class="list-item-asw"
						@click="handleTestAnswer(item.id,item.pt_name)">
						查看答案
					</button>
				</li>
				
			</ul>			
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	
	export default {
		name: 'SimulateTest',		
		data () {
			return {
				title: '模拟考场',
				backUrl:'/exer',
				list:[
					{id:1,pt_name:'2018年资料员专业基础知识试题一',status:1},
					{id:2,pt_name:'2018年资料员专业基础知识试题二',status:0},
					{id:3,pt_name:'2018年资料员专业基础知识试题三',status:0},
					{id:4,pt_name:'2018年资料员专业基础知识试题四',status:0},
					{id:5,pt_name:'2018年资料员专业基础知识试题五',status:0}
				]
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handleTestAnswer(paperId,paperName){
				//paperId试卷id
				//根据试卷id获取试题列表
				//getSimulateTestItems?ptId=paperId
				let itemList = [{	
						id:1,
						q_name:'单选试题名称',
						q_type:'1',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:2,
						q_name:'多选试题名称',
						q_type:'2',//类型：单选-1、多选-2、判断-3		
						q_result:[1,2],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:3,
						q_name:'判断试题名称',
						q_type:'3',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B']
					}]

				let info = {
					itemTheme:paperName,
					itemDetail: itemList
				};

				this.$store.dispatch('initializeData',info);						
				this.$router.push('/testHisItem');
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;
	.list{
		@include padlf40;
		padding-top: .7rem;
	}
	.list-item{
		display: block;
		padding:.3rem 0;
		display: flex;
		@include border-bottom($border-dark-grey);

		.list-item-link{
			flex:1;
			line-height: 1.5;
			color: $color-dark;
			font-size: $font18;
		}
		.list-item-asw{			
			font-size: $font16;
			color: $color-orange;
			padding:.05rem .25rem;
			border:1px solid $color-orange;
			border-radius: .5rem;
		}
	}
}	
</style>