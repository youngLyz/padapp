<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div class="page-body">
			<ul class="list">
				<router-link
					class="list-item"
					tag="li"
					v-for="(item, index) of list"
					:key="item.id"
					:to="'/readBook/'+item.id"><span class="list-item-circle"></span>{{ item.name }}</router-link>
			</ul>
		</div>		
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader' 	
	export default {
		name: 'Read',
		data () {
			return {
				title: '阅读',
				list: []
			}
		},
		components: {
			SimpleHeader
		},
		created() {
			JSI.getPdfFile((res)=>{
				this.list = res;
			});
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.12rem;		
	.list{
		padding-left: 0.776rem;
		margin-bottom: 1.6rem;
		.list-item{					
			line-height: 1.1rem;			
			color:$color-grey;
			padding-top: 0.08rem;			
			@include border-bottom;
			.list-item-circle{
				width: 0.16rem;
				height: 0.16rem;
				display: inline-block;
				background-color: $color-grey;
				border-radius: 50%;
				margin-right: 0.432rem;
				margin-left: 0.656rem;
			}
		}
	}
}
</style>