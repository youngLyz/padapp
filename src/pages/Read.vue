<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div>
			电子书阅读
		</div>		
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader' 	
	export default {
		name: 'Read',
		data () {
			return {
				title:'阅读'
			}
		},
		components: {
			SimpleHeader
		}
	}
</script>

<style lang="scss" scoped>
	
</style>