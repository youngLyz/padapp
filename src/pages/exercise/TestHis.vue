<template>
	
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="list">
				<li					
					class="list-item"
					v-for="(item,index) of list"
					:key="item.id"
					@click="handleHisClick(item.id)">
					<div class="list-item-hd">
						<span class="list-item-title">
							{{item.title}}
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
						title:'2018年资料员专业基础知识试题一2018年资料员专业基础知识试题一',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:2,
						title:'2018年资料员专业基础知识试题二',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:3,
						title:'2018年资料员专业基础知识试题三',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:4,
						title:'2018年资料员专业基础知识试题四',
						date:'2018-07-11 10:10:32',
						score:50},
					{id:5,
						title:'2018年资料员专业基础知识试题五',
						date:'2018-07-11 10:10:32',
						score:50}
				]
			}
		},
		components: {
			PageHeader
		},
		methods: {
			handleHisClick (paperId) {
				let info = {
					itemTheme:'',
					itemDetail: []					
				};
				//获取试卷标题和试题列表
				this.$axios.get('/simulate.json').then(res=>{					
					//console.log('axios get:'+JSON.stringify(res.data.status));
					res = res.data;
					if(res.status==='ok'){
						info.itemTheme = res.data.itemTheme;
						info.itemDetail = res.data.itemDetail;
						this.$store.dispatch('initializeData',info);
						this.$router.push('/testHisItem');
					}
				}).catch(err=>{
					console.log('axios error:'+err)
				});
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