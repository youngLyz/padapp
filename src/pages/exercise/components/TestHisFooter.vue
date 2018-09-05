<template>	
	<nav class="footer-nav">	
		<div class="footer-link prev-link" 
			@click="clickPrevItem"
			:class="{'disable':itemNum===1}">
			<span class="iconfont prev">&#xe625;</span>
			<span class="footer-text">上一题</span>
		</div>		
		<div class="footer-link next-link" 
			@click="clickNextItem"
			:class="{'disable':itemNum===itemDetail.length}">
			<span class="iconfont">&#xe625;</span>
			<span class="footer-text">下一题</span>
		</div>
	</nav>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	export default {
		name: 'TestHisFooter',		
		computed: {
			...mapState(['itemNum','itemDetail'])
		},
		methods: {
			clickPrevItem () {
				this.$emit('prevBtnClick')
			},
			clickNextItem() {
				this.$emit('nextBtnClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
.footer-nav{
	position: fixed;
	bottom: 0;
	left: 0;
	right:0;
	z-index: 99;
	background: $bg-grey;
	height: 1.9rem;
	border-top: 1px solid $border-dark-grey;
	display: flex;
	.footer-link{
		flex: 1;
		color: $color-grey;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		&.next-link,&.prev-link{
			color: $blue;
		}
		&.disable{
			color: $color-grey;
			cursor: not-allowed;
		}
		.prev{transform:rotate(180deg);}
		.iconfont{
			font-size: $font30;
		}
		.footer-text{
			font-size: $font24;			
		}

	}

}
</style>