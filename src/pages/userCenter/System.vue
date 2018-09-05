<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<ul class="point-list">
				<router-link 
					tag="li" 
					class="point-item" 
					v-for="(item,index) of list" 
					:key="item.id"
					:to="'/detail/'+item.id">
					{{item.title}}					
					<span class="iconfont right">&#xe628;</span>
					<span class="point-info">{{item.date}}</span>
				</router-link>		
			</ul>	
		</div>	
	</div>
</template>
<script type="text/javascript">
	import PageHeader from 'comp/Header' 	
	export default {
		name: 'UserSystem',
		data () {
			return {
				title:'系统通知',
				list: [{id:1,
						title:"世界银行贷款“现代财政制度与国家治理”技援项目“会计人员职业道德",
						date:"2018-07-09 15:30:28"},
						{id:2,
						title:"世界银行贷款“现代财政制度与国家治理”技援项目“会计人员职业道德",
						date:"2018-07-09 15:30:28"},
						{id:3,
						title:"世界银行贷款“现代财政制度与国家治理”技援项目“会计人员职业道德",
						date:"2018-07-09 15:30:28"},
						{id:4,
						title:"世界银行贷款“现代财政制度与国家治理”技援项目“会计人员职业道德",
						date:"2018-07-09 15:30:28"}
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
	margin-top: 2.32rem;

	.point-list{
		@include border-top;
		margin: 0 0.24rem;					
		.point-item{
			@include padlf40;
			height: 1.25rem;
			line-height: 1.25rem;
			color:$color-dark-grey;
			@include border-bottom($border-dark-grey);			
			.iconfont{
				color:$blue;
				font-size: $font20;		
			}
			.point-info{
				float: right;
				color: $color-grey;	
				margin-right: .15rem;
			}
			.right{
				float: right;	
				color: $border-ccc;
				font-size: $font20;			
			}
		}
	}
}	
</style>