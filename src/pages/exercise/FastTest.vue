<template>
	
	<div>
		<page-header :title="title" :backUrl="backUrl"></page-header>
		<div class="select-body">
			<h2 class="select-title">选择测试题型</h2>
			<select-type @selectedType="handleSeleted"></select-type>
			<div class="btn-box" v-show="selectType">
				<line-button name="开始练习" @skipNext="handleBtnClick"></line-button>
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import PageHeader from 'comp/Header'
	import SelectType from './components/SelectType'
	import LineButton from 'comp/LineButton'
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
			LineButton
		},
		methods: {			
			handleBtnClick () {
				let info = {
					itemTheme:'',
					itemDetail: []
				};
				//获取试卷标题和试题列表
				this.$axios.get('/fastTest.json').then(res=>{					
					res = res.data;
					if(res.status==='ok'){
						info.itemTheme = res.data.itemTheme;
						info.itemDetail = res.data.itemDetail;
						this.$store.dispatch('initializeData',info);
						this.$router.push('/testItem/fastTest');
					}
				}).catch(err=>{
					console.log('axios error:'+err)
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
	margin-top: 1.3rem;
	@include padlf40;	
}
.select-title{
		color: $blue;
		font-size: $font24;
		height: 1.7rem;
		line-height: 1.7rem;
	}
.btn-box{
	margin-top: .8rem;	
}

</style>