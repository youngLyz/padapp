<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<ul class="point-list">
				<li class="point-item" 
					v-for="(item,index) of list"
					:key="index"
					@click="handlePointClick(item)">
					{{item}}
					<span class="iconfont">&#xe8f0;</span>
				</li>
			</ul>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'PointTest',
		data () {
			return {
				title: '考点练习',
				backUrl:'/exer',
				list: []
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handlePointClick (item) {

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
					itemTheme:this.title,
					totalScore:itemList.length,
					scorePrinciple:{
						single_score:1,
						multi_score:1,
						tf_score:1
					},
					itemDetail: itemList
				};
				this.$store.dispatch('initializeData',info);
				this.$router.push('/testItem/pointTest');			

			}
		},
		created () {
			this.list = ['知识点1','知识点2','知识点3','知识点4','知识点5']
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;

	.point-list{
		border-top: .25rem solid $bg-grey;
		.point-item{
			@include padlf40;
			height: 1rem;
			line-height: 1rem;
			color:$color-dark-grey;
			@include border-bottom($border-dark-grey);
			.iconfont{
				float: right;				
				color:$blue;
				font-size: $font20;
			}
		}
	}
}	
</style>