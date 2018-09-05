<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<p class="no-item-tip" v-if="list.length==0">您还没有错题记录~</p>
			<ul v-else class="list">
				<router-link
					tag="li"					
					class="list-item"
					v-for="(item,index) of list"
					:key="item.id"
					:to="'/myWrongDetail/'+item.id"
					>
					<div class="list-item-hd">
						<span class="list-item-title">
							{{item.q_name}}
						</span>
						<p class="list-item-info">
							{{item.date}}							
						</p>						
					</div>
					<span class="iconfont list-item-check">&#xe623;</span>					
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header' 
	export default {
		name: 'MyWrong',
		data () {
			return {
				title: '错题集',
				list:[]
			}
		},
		components: {
			PageHeader
		},
		methods: {

		},
		created () {
			/*this.$axios.get('/myWrong.json').then(res=>{					
					res = res.data;
					if(res.status==='ok'){						
						this.list = res.data.itemDetail;
					}
				}).catch(err=>{
					console.log('axios error:'+err)
				});
				*/
			JSI.getAllWrongQuestions(this.$store.state.userInfo.id,(res)=>{
				this.list = res;
				let info = {					
					itemDetail: res
				};
				this.$store.dispatch('initializeData',info);
			})	
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
	.list{
		margin: 0 0.76rem;
		@include border-top;
	}
	.list-item{
		display: flex;
		padding:.3rem 0.24rem;	

		@include border-bottom;
		.list-item-hd{
			flex: 1;
			padding-right: .15rem; 
		}
		.list-item-title{			
			color: $color-dark-grey;
			font-size: $font18;
		}
		.list-item-check{
			font-size: $font24;
			color: $color-orange;
		}
		.list-item-info{
			color: $color-grey;
			font-size: $font16;
		}		
	}
}			
</style>