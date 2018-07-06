<template>
	<div>
		<page-header :title="title"></page-header>
	</div>

</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'WrongTest',
		data () {
			return {
				title: '错题重做'
			}
		},
		components: {
			PageHeader
		}
	}
</script>

<style lang="scss" scoped>
	
</style>