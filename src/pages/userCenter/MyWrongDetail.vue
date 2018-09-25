<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">[{{itemInfo.type_name}}]</span>				
			</h2>
			<ul class="test-list">
				<li class="test-list-item descrip">
					{{itemInfo.q_name}}
				</li>
				<!-- <li><h4 class="test-tip">选项</h4></li> -->
				<li class="test-list-item" 
					v-for="(item,index) of itemInfo.q_option"
					:key="index"					
				>
					<button 
						type="button" 
						class="test-option-btn"
						>
						{{asList[index]}}						
					</button>
					{{item}}
				</li>				
			</ul>
			<div class="answer-descrip">
				<h4 class="answer-hd">				
					答案解析
				</h4>
				<div class="answer-info">
					正确答案<span v-for="(res,index) of itemRes" class="answer-color">{{res}}</span>
				</div>
			</div>
		</div>		
		
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	export default {
		name: 'MyWrongDetail',				
		data () {
			return {	
				title:'试题详情',
				asList: ['A','B','C','D','E','F','G','H','I','J'],				
				itemInfo: {},
				item_id: this.$route.params.id		
			}
		},		
		components: {
			PageHeader		
		},
		computed: {
			itemRes() {
				let res = this.itemInfo.q_result;
				let str =  res.map((item,index)=>{					
					return this.asList[item-1]
				});				
				return str//.join(",");
			}
		},
		created () {
			let list = this.$store.state.itemDetail;

			this.itemInfo = list.find((item,index)=>item.id==this.item_id);			
			console.log("MyWrongDetail:"+JSON.stringify(this.itemInfo));
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin: 1.36rem 0.76rem 0;	
	height: 10rem;
	overflow: auto;
	.test-title{
		padding:0 0.672rem;
		font-size: $font18;
		color: $blue;
		line-height: 0.896rem;
		@include border-bottom;
		.test-type{
			padding-right: 0.32rem;			
		}
	}
	.test-content{
		display: flex;
	}
	.test-pics{
		width: 6.4rem;
		margin: 0.36rem 1.04rem;
		img{
			width: 100%;
		}
	}
	.test-list{
		position: relative;
		flex:1;
		padding:0.36rem 1.24rem;
		&:before{
			content:'';
			width: 0.16rem;
			height: 0.16rem;
			background: $color-dark;
			border-radius: 50%;
			position: absolute;
			left: 0.64rem;
			top: 0.56rem;
		}
		.test-list-item{
			font-size: $font18;	
			color: $color-dark;	
			line-height: 0.56rem;
			padding-bottom: 0.36rem;
			&.descrip{
			}
			.test-option-btn{
				width:0.512rem;
				height: 0.512rem;
				margin-right:0.24rem;
				color: $color-grey;
				font-size: $font18;
				border:1px solid $color-dark;
				border-radius: 50%;

			}
			&.selected{
				color: $green;
				.test-option-btn{
					color: $color-white;
					background: $green;
					border:1px solid $green;
				}
			}
		}
	}
	.test-tip{
		color: $blue;
		font-size: $font16;
		padding: .15rem 0;
	}	
}	
.answer-check-btn{
	margin-top: 1.2rem;
	width: 3.328rem;
	height: 0.768rem;
	line-height: 0.7655rem;		
	font-size: $font20;
	color: $color-white;
	@include background($green);	
}
.answer-descrip{	
	border-top: 1px solid $border-dark-grey;
	color: $color-dark-grey;
	text-align: center;
	padding-bottom: 0.72rem;
	.answer-hd{
		text-align: left;
		line-height: 1.6;
		font-size: $font18;
		padding:0.36rem 1.24rem;
		position: relative;
		color: $blue;
		&:before{
			content:'';
			width: 0.16rem;
			height: 0.16rem;
			background: $blue;
			border-radius: 50%;
			position: absolute;
			left: 0.64rem;
			top: 0.56rem;
		}
	}
	.answer-info{
		text-align: left;
		padding:0 1.24rem;
	}
	.answer-hd-icon{
		font-size: $font30;
		color: $color-white;
		background: $bg-cyan;
		width: .7rem;
		height: .7rem;		
		border-radius: 50%;
		margin-right: .1rem;
	}
	.answer-color{
		width:0.512rem;
		height: 0.512rem;
		line-height: 0.512rem;
		margin-right:.01rem;
		margin-left:.25rem;
		font-size: $font16;
		border:1px solid $color-grey;
		border-radius: 50%;
		display: inline-block;
		text-align: center;
		color: $color-white;
		background: $green;
		border:1px solid $green;
	}

}
</style>