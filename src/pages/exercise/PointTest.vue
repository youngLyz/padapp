<template>
	<div>
		<page-header :title="title"></page-header>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'PointTest',
		data () {
			return {
				title: '考点练习'
			}
		},
		components: {
			PageHeader
		}
	}
</script>

<style lang="scss" scoped>
	
</style>