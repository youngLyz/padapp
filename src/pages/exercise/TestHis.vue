<template>
	
	<div>
		<page-header :title="title"></page-header>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'TestHis',
		data () {
			return {
				title: '测试记录'
			}
		},
		components: {
			PageHeader
		}
	}
</script>

<style lang="scss" scoped>
	
</style>