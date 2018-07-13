<template>
	<div>
		<page-header :title="title"></page-header>
		<div class="page-body">
			<h2 class="test-title">
				<span class="test-type">[{{itemInfo.type_name}}]</span>				
			</h2>
			<ul class="test-list">
				<li class="test-list-item descrip">
					{{itemInfo.topic_name}}
				</li>
				<li><h4 class="test-tip">选项</h4></li>
				<li class="test-list-item" 
					v-for="(item,index) of itemInfo.topic_answer"
					:key="item.topic_answer_id"					
				>
					<button 
						type="button" 
						class="test-option-btn"
						>
						{{asList[index]}}						
					</button>
					{{item.answer_name}}
				</li>				
			</ul>
			<div class="answer-descrip">
				<h4 class="answer-hd">
					<span class="iconfont answer-hd-icon">&#xe71b;</span>
					答案解析
				</h4>
				<div class="answer-info">
					正确答案<span class="answer-color">{{itemInfo.answer_ids}}</span>
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
		created () {
			this.$axios.get("/myWrong.json").then(res=>{
				res = res.data;
				if(res.status==='ok'){
					let list = res.data.itemDetail;
					this.itemInfo = list.find((item,index)=>item.topic_id==this.item_id);
				}
			}).catch(err=>{
				console.log('ajax error:'+err);
			})
		}
	}
</script>

<style lang="scss" scoped>
.page-body{
	margin-top: 1.3rem;
	@include padlf40;
	.test-title{
		font-size: $font20;
		color: $color-dark;
		line-height: 1.2rem;
		@include border-bottom($border-dark-grey);
		.test-type{
			color: $blue;
		}
	}
	.test-list{
		.test-list-item{
			font-size: $font18;	
			color: $color-black;	
			line-height: 1rem;
			&.descrip{
				padding:.25rem 0;
			}
			.test-option-btn{
				width:.7rem;
				height: .7rem;
				margin-right:.5rem;
				color: $color-grey;
				font-size: $font24;
				border:1px solid $color-grey;
				border-radius: 50%;

			}
			&.selected{
				color: $bg-cyan;
				.test-option-btn{
					color: $color-white;
					background: $bg-cyan;
					border:1px solid $bg-cyan;
				}
			}
		}
	}
	.test-tip{
		color: $blue;
		font-size: $font16;
		padding: .3rem 0;
	}	
}	
.answer-descrip{
	margin-top: .5rem;
	padding-top: .5rem;
	border-top: 1px solid $border-dark-grey;
	color: $color-dark-grey;
	.answer-hd{line-height: .7rem;margin-bottom: .25rem;}
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
		color: $bg-cyan;
		padding-left: .1rem;
	}

}
</style>