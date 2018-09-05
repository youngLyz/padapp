<template>
	
	<div>
		<!-- <dialogs-wrapper wrapper-name="fastTest-message" tag="div" transition-name="fade">			
		</dialogs-wrapper> -->
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="select-body">
			<h2 class="select-title">选择测试题型</h2>
			<select-type @selectedType="handleSeleted"></select-type>
			<div class="btn-box" v-show="selectType">
				<full-button name="开始练习" @skipNext="handleBtnClick"></full-button>
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import SelectType from './components/SelectType'
	import FullButton from 'comp/FullButton'
	export default {
		name: 'FastTest',
		data () {
			return {
				title: '快速练习',
				backUrl:'/exer',
				selected: ''	
			}
		},
		computed: {
			selectType () {
				return this.selected!='';
			}
		},
		components: {
			PageHeader,
			SelectType,
			FullButton
		},
		methods: {			
			handleBtnClick () {

				/*let itemList = [{	
						id:1,
						q_name:'单选试题名称',
						q_type:'1',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:2,
						q_name:'多选试题名称',
						q_type:'2',//类型：单选-1、多选-2、判断-3		
						q_result:[1,2],//1,2,3,4对应ABCD
						q_option:['选项A','选项B','选项C','选项D']
					},
					{	id:3,
						q_name:'判断试题名称',
						q_type:'3',//类型：单选-1、多选-2、判断-3		
						q_result:[1],//1,2,3,4对应ABCD
						q_option:['选项A','选项B']
					}]*/

				let info = {
					itemTheme:this.title,
					totalScore:0,
					scorePrinciple:{
						single_score:1,
						multi_score:1,
						tf_score:1
					},
					itemDetail: null
				};
				JSI.genPostKnowQuestions(
					{	
						"u_id":this.$store.state.userInfo.id,
						"post":this.$store.state.firstClz.id,
						"know":this.$store.state.secondClz.id,
						"qtype":this.selected,
						"num":10
					},(res)=>{
						/*if(res.length==0){
							this.$showMsg('该类别下没有试题')
						}else{*/
						info.itemDetail = res;
						info.totalScore = res.length;					
						this.$store.dispatch('initializeData',info);
						this.$router.push('/testItem/fastTest');			
						//}
						
					});				
				
			},
			handleSeleted (type) {
				this.selected = type;
			}

		}
	}
</script>

<style lang="scss" scoped>
.select-body{
	margin: 1.12rem 0.76rem;
}
.select-title{
		color: $blue;
		font-size: $font20;
		height: 1.2rem;
		line-height: 1.2rem;
		padding:0 0.24rem;
	}
.btn-box{	
	margin-top: 1.2rem;
	text-align: center;
}

</style>