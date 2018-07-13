<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="list">
				<router-link
					tag="li"					
					class="list-item"
					v-for="(item,index) of list"
					:key="item.id"
					:to="'/myWrongDetail/'+item.topic_id"
					@click="handleHisClick(item.topic_id)">
					<div class="list-item-hd">
						<span class="list-item-title">
							{{item.topic_name}}
						</span>
						<p class="list-item-info">
							{{item.date}}							
						</p>						
					</div>
					<span class="iconfont list-item-check">&#xe641;</span>					
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
			this.$axios.get('/myWrong.json').then(res=>{					
					res = res.data;
					if(res.status==='ok'){						
						this.list = res.data.itemDetail;
					}
				}).catch(err=>{
					console.log('axios error:'+err)
				});
				
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
			font-size: $font24;
			color: $color-orange;
		}
		.list-item-info{
			padding-top: .2rem; 
			color: $color-grey;
			font-size: $font16;
		}		
	}
}			
</style>