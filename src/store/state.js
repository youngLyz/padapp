export default {
	firstClz:'',
	secondClz:'',
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	showTime:'00:00:00',
	timer: '', //考试定时器
	itemTheme: '',
	itemDetail: [],
	answerid:{
		'ONE':[],
		'MORE':[],
		'TFNG':[],
		len:0
	}, //答案id
	examDate: "2018-07-13 11:11:00",//考试开始时间
	examMinutes: "1",//考试时间分钟
	examClock:"00天 00:00:00",
	examtimer: null,//距离考试倒计时定时器
	examState:false//考试状态，只在考试期间为true
	
}