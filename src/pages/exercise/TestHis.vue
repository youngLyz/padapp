<template>
	
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="list">
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
					<span class="iconfont list-item-check">&#xe656;</span>					
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
				list:[
					{	id:1,
						pt_name:'2018年资料员专业基础知识试题一2018年资料员专业基础知识试题一',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:2,
						pt_name:'2018年资料员专业基础知识试题二',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:3,
						pt_name:'2018年资料员专业基础知识试题三',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:4,
						pt_name:'2018年资料员专业基础知识试题四',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:5,
						pt_name:'2018年资料员专业基础知识试题五',
						date:'2018-07-11 10:10:32',
						score:50}
				]
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handleHisClick (paperId,paperName) {				
				//获取试卷标题和试题列表
				let itemList = [{	
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
					}];

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
		display: flex;
		padding:.3rem 0;		
		@include border-bottom($border-dark-grey);
		.list-item-hd{
			flex: 1;
			padding-right: .15rem; 
		}
		.list-item-title{			
			color: $color-dark-grey;
			font-size: $font18;
		}
		.list-item-check{
			font-size: $font30;
			color: $color-grey;
		}
		.list-item-info{
			padding-top: .2rem; 
			color: $color-grey;
			font-size: $font16;
		}
		.list-item-score{
			color: $color-orange;
		}
	}
}		
</style>