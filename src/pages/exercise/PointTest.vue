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

				let info = {
					itemTheme:'',
					itemDetail: []
				};
				//获取试卷标题和试题列表
				this.$axios.get('/fastTest.json').then(res=>{					
					res = res.data;
					if(res.status==='ok'){
						info.itemTheme = '考点练习';//res.data.itemTheme;
						info.itemDetail = res.data.itemDetail;
						this.$store.dispatch('initializeData',info);
						this.$router.push('/testItem/pointTest');
					}
				}).catch(err=>{
					console.log('axios error:'+err)
				});

			}
		},
		created () {
			this.$axios.get('/pointList.json').then(res=>{
				res = res.data;
				if(res.status==="ok"){					
					this.list = res.data.list;
				}				
			}).catch(err=>{
				console.log('axios error:'+err)
			})
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