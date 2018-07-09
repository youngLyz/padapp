<template>
	<div>
		<simple-header :title="title"></simple-header>
		<div>
			考试
		</div>		
	</div>
</template>
<script type="text/javascript">
	import SimpleHeader from 'comp/SimpleHeader' 	
	export default {
		name: 'Exam',
		data () {
			return {
				title:'考试'
			}
		},
		components: {
			SimpleHeader
		}
	}
</script>

<style lang="scss" scoped>
	
</style>