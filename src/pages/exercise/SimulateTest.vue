<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<p class="no-item-tip" v-if="list.length==0">当前分类没有模拟试卷~</p>
			<ul v-else class="list">
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
					/*{id:1,pt_name:'2018年资料员专业基础知识试题一',status:1},
					{id:2,pt_name:'2018年资料员专业基础知识试题二',status:0},
					{id:3,pt_name:'2018年资料员专业基础知识试题三',status:0},
					{id:4,pt_name:'2018年资料员专业基础知识试题四',status:0},
					{id:5,pt_name:'2018年资料员专业基础知识试题五',status:0}*/
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
				/*let itemList = [{	
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
					}]*/
				let info = {
					itemId:paperId,
					itemTheme:paperName,
					itemDetail: null
				};
				JSI.getPageTblObjectById(paperId,(res)=>{
					info.itemDetail = res;
					this.$store.dispatch('initializeData',info);						
					this.$router.push('/testHisItem');
				});					
				
			}
		},
		mounted () {//待添加岗位id			
			JSI.getAllPageTbl(this.$store.state.userInfo.id,(res)=>{
				//console.log(JSON.stringify(res));
				this.list = res;
			});
		}

	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;
	.no-item-tip{
		font-size: $font18;
		color: $color-dark-grey;
		line-height: 2rem;
		text-align: center;
	}
	.list{
		@include padlf40;
		padding-top: .7rem;
	}
	.list-item{
		height: 1.192rem;
		padding-left: 0.2rem;			
		display: flex;
		@include border-bottom;		

		.list-item-link{
			flex:1;
			color: $color-dark;
			font-size: $font18;
			line-height: 1.192rem;
		}
		.list-item-asw{			
			font-size: $font16;
			color: $color-orange;
			display: inline-block;
			padding:0 .25rem;
			height: 0.6rem;
			margin-top: 0.3rem;
			border:1px solid $color-orange;			
		}
	}
}	
</style>