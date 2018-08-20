export default {
	userInfo:null,
	postClz:[],
	firstClz:null,
	secondClz:null,
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	showTime:'00:00:00',
	timer: '', //考试定时器	
	itemTheme: '',//试卷题目
	scorePrinciple:{},
	totalScore:0,
	currentItemId:'',//当前试卷id
	itemDetail: [],
	score:0,
	answerid:{
		'1':[],
		'2':[],
		'3':[],
		len:0
	}, //答案id
	pt_info: {/*//考试信息
				id:123,
				pt_name:"2018年资料员专业基础知识试题一",				
				pt_single_num:30,
				pt_single_score:1,
				pt_multi_num:20,
				pt_multi_score:2,
				pt_tf_num:20,
				pt_tf_score:1.5,				
				answer_time:"120",
				type_num:"单选题（30）多选题（20）判断题（20）",
				total_score:100,
				exam_date:'2018-07-20 15:30:00',
				submit_date:null,//提交时间		
				intro:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。"*/
			},
	examDate: "2018-07-20 14:30:00",//考试开始时间
	examMinutes: "2",//考试时间分钟
	examClock:"00天 00:00:00",
	examtimer: null,//距离考试倒计时定时器
	examState:false//考试状态，在考试期间且未提交时为true
}