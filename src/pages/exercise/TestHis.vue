<template>
	
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<p class="no-item-tip" v-if="list.length==0">您尚未提交模拟试卷，当前没有测试记录</p>
			<ul v-else class="list">
				<li					
					class="list-item"
					v-for="(item,index) of list"
					:key="item.id"
					@click="handleHisClick(item.id,item.pt_name)">
					<div class="list-item-hd">
						<span class="list-item-title">
							{{item.pt_name}}
						</span>
						<p class="list-item-info">
							{{item.date}}
							&nbsp;&nbsp;得分：
							<span class="list-item-score">
								{{item.score}}
							</span>
						</p>						
					</div>
					<span class="iconfont list-item-check">&#xe613;</span>					
				</li>	
			</ul>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'TestHis',
		data () {
			return {
				title: '测试记录',
				list:[]
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handleHisClick (paperId,paperName) {				
				//获取试卷标题和试题列表
				/*let itemList = [{	
						id:1,
						q_name:'单选试题名称',
						q_type:'1',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						answer_ids:[2],
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:2,
						q_name:'多选试题名称',
						q_type:'2',//类型：单选-1、多选-2、判断-3		
						q_result:[1,2],//1,2,3,4对应ABCD
						answer_ids:[2,3],
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:3,
						q_name:'判断试题名称',
						q_type:'3',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						answer_ids:[1],
						q_option:['选项A','选项B']
					}];*/
				let info = {
					itemId:paperId,
					itemTheme:paperName,
					itemDetail: null
				};
				JSI.checkHisItemDetail(this.$store.state.userInfo.id,paperId,(res)=>{
					info.itemDetail = res;
					this.$store.dispatch('initializeData',info);						
					this.$router.push('/testHisItem');
				});					
			}
		},
		created() {
			JSI.checkHisItemList(this.$store.state.userInfo.id,(res)=>{
				this.list = res;
			});
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.12rem;
	.no-item-tip{
		font-size: $font18;
		color: $color-dark-grey;
		line-height: 2rem;
		text-align: center;
	}
	.list{
		margin: 0 0.76rem;
	}
	.list-item{
		display: flex;
		padding-top: 0.44rem;
		padding-bottom: 0.32rem;	
		padding-left: 0.2rem;
		padding-right: 0.512rem;	
		@include border-bottom;
		.list-item-hd{
			flex: 1;
			padding-right: .15rem; 
		}
		.list-item-title{			
			color: $color-dark-grey;
			font-size: $font18;
			line-height: 0.56rem;
		}
		.list-item-check{
			font-size: $font30;
			color: $border-ccc;
		}
		.list-item-info{
			color: $border-ccc;
			font-size: $font16;
			line-height: 0.56rem;
		}
		.list-item-score{
			color: $color-orange;
		}
	}
}		
</style>