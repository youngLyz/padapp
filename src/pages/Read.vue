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
					:to="'/readBook/'+item.id">{{ item.name }}</router-link>
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
	margin-top: 1.3rem;	
	@include padlf40;

	.list{
		padding: .5rem 0;
		.list-item{
			line-height: 1.25rem;
			color:$color-dark-grey;
			@include border-bottom;
		}
	}
}
</style>