<template>
	<div>
		<page-header :title="detail.title"></page-header>
		<div class="page-body">
			<p class="date">发布时间：{{detail.date}}</p>
			<div class="content" v-html="detail.content"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import PageHeader from 'comp/Header' 
	export default {
		name:'PageDetail',
		data () {
			return {
				detail: {
					id: 1,
					title: '世界银行贷款“现代财政制度与国家治理”技援项目“会计人员职业道德',
					date: '2018-07-09 12:34:06',
					content: '<div><p style="layout-grid-mode: char"><span>&nbsp;&nbsp;&nbsp;&nbsp;根据《国际复兴开发银行贷款及国际开发协会信贷和赠款<span lang="EN-US">—</span>世界银行借款人货物、工程和非咨询服务采购指南》、《国际复兴开发银行贷款及国际开发协会信贷和赠款<span lang="EN-US">—</span>世界银行借款人选择和聘请咨询顾问指南》相关规定，世界银行贷款<span lang="EN-US">“</span>现代财政制度与国家治理<span lang="EN-US">”</span>技援项目<span lang="EN-US">“</span>中国会计标准改革与完善<span lang="EN-US">”</span>下<span lang="EN-US">“</span>会计人员职业道德规范研究<span lang="EN-US">”</span>，采用世界银行基于咨询顾问资历的采购方式与选定的机构签订了一份总价合同，现将合同信息公示如下：</span></p><p style="layout-grid-mode: char">　　<span>一、选定的咨询服务机构名称：对外经济贸易大学</span></p><p style="layout-grid-mode: char">　　<span>二、合同价格：叁万捌仟美元（<span lang="EN-US">38,000.00</span>美元）</span></p><p style="layout-grid-mode: char">　　<span>三、合同期限：<span lang="EN-US">2018</span>年<span lang="EN-US">6</span>月<span lang="EN-US">20</span>日至<span lang="EN-US">2019</span>年<span lang="EN-US">8</span>月<span lang="EN-US">31</span>日</span></p><p style="layout-grid-mode: char">　　<span>四、合同范围概述：</span></p><p style="layout-grid-mode: char">　<span lang="EN-US"><span> </span></span><span>（一）开展会计人员职业道德问卷调查，全面总结分析我国会计人员职业道德建设现状及存在的问题；</span></p><p style="layout-grid-mode: char">&nbsp;　<span>（二）借鉴国际经验，深入研究英国、美国、法国等发达国家关于会计人员职业道德的具体要求，从国际通行做法中提炼出对会计人员职业道德的共性要求；</span></p><p style="layout-grid-mode: char">　 <span>（三）结合近年来我国会计人员职业道德建设现状，借鉴国际成功经验，研究提出建立健全我国会计人员职业道德规范体系的政策建议，形成《会计人员职业道德规范研究》课题研究报告和《中国会计人员职业道德规范（建议稿）》。</span></p><p style="layout-grid-mode: char">&nbsp;</p><p style="layout-grid-mode: char">　　<span>（联系人：沈玉凯，电话<span lang="EN-US">:010-68552546</span>，电子邮件<font face="Times New Roman">：</font><a href="mailto:shenyukai@mof.gov.cn"><font face="Times New Roman" style="font-size: 12pt">shenyukai@mof.gov.cn</font></a><font face="Times New Roman">）</font></span></p><p style="layout-grid-mode: char">&nbsp;</p><p style="layout-grid-mode: char">&nbsp;</p><p align="right" style="text-align: right; layout-grid-mode: char">　　<span>　　财政部会计司</span></p><p align="right" style="text-align: right">　　<span>　　<span lang="EN-US">2018</span>年<span lang="EN-US">6</span>月<span lang="EN-US">20</span>日</span></p></div>'
				}
			}
			
		},
		components: {
			PageHeader
		}
	}
</script>
<style lang="scss" scoped>
.page-body{
	margin:1.68rem 0.76rem;
	.date {
		line-height: 1.5;
		color: $color-grey;
	}
	.content{
		margin: .24rem 0;		
	}
}
</style>