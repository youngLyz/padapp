<template>
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="page-body">
			<p class="no-item-tip" v-if="list.length==0">当前分类下没有考点~</p>			
			<ul v-else class="point-list">
				<li class="point-item" 
					v-for="(item,index) of list"
					:key="index"
					@click="handlePointClick(item.qpt_id)">
					{{item.qpt_name}}
					<span class="iconfont">&#xe628;</span>
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
			handlePointClick (itemId) {
				let info = {
					itemTheme:this.title,
					totalScore:0,
					scorePrinciple:{
						single_score:1,
						multi_score:1,
						tf_score:1
					},
					itemDetail: null
				};
				//知识点查询
				JSI.genPostKnowPointsQuestions(
					{	
						"post":this.$store.state.firstClz.id,
						"know":this.$store.state.secondClz.id,						
						"point":itemId
					},(res)=>{
						if(res.length==0){
							this.$showMsg('该类别下没有试题')
						}else{
							info.itemDetail = res;
							info.totalScore = res.length;	
							this.$store.dispatch('initializeData',info);
							this.$router.push('/testItem/pointTest');					
						}
					});			

			}
		},
		created () {
			//this.list = ['知识点1','知识点2','知识点3','知识点4','知识点5']
			JSI.genPostKnowPoints(
				{
				"post":this.$store.state.firstClz.id,
				"know":this.$store.state.secondClz.id				
				},(res)=>{
				this.list = res;		
			});

		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 2.32rem;
	.no-item-tip{
		font-size: $font18;
		color: $color-dark-grey;
		line-height: 2rem;
		text-align: center;
	}
	.point-list{
		margin: 0 0.768rem;
		@include border-top;
		.point-item{
			padding:0 0.24rem;
			height: 1.2rem;
			line-height: 1.2rem;
			color:$color-dark-grey;
			font-size:$font18;
			@include border-bottom;
			.iconfont{
				float: right;				
				color:$blue;
				font-size: $font20;
			}
		}
	}
}	
</style>