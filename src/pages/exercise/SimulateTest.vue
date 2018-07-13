<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<ul class="list">
				<li class="list-item"
					v-for="(item,index) of list"
					:key="item.id">
					<router-link 
						to="/testStart" 
						class="list-item-link">
						{{item.title}}
					</router-link>
					<router-link 
						v-show="item.status==1" 
						to="/testStart" 
						class="list-item-asw">
						查看答案
					</router-link>
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
					{id:1,title:'2018年资料员专业基础知识试题一',status:1},
					{id:2,title:'2018年资料员专业基础知识试题二',status:0},
					{id:3,title:'2018年资料员专业基础知识试题三',status:0},
					{id:4,title:'2018年资料员专业基础知识试题四',status:0},
					{id:5,title:'2018年资料员专业基础知识试题五',status:0}
				]
			}
		},
		components: {
			PageHeader
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