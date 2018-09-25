	//java与js交互
	//var JSI;
	if(typeof JSI == 'undefined') 
		JSI = {
			afunc: function(){
				console.log("test jsi");
			}
		};
	(function(){
		/**
		*初始化考试系统
		*@param func回调函数
		*
		**/
		JSI.initSystem = function (func){
			var method = "initSystem";
			var params = {};
			callAndroidMethod(method,params,func);
		}
		/**
		 * *Admin.vue
		 */
		JSI.initSystemDatabase = function (func){
			var method = "initSystemDatabase";
			var params = {};
			callAndroidMethod(method,params,func);
		}
		/**
		*获取人员一级大类和知识点二级分类 Home.vue
		* @return [
				{firstClass:{id:1,qp_name:'资料员'},secondClass:[{id:11,qk_name:'专业管理实务'},{id:12,qk_name:'基础知识'}]},
				{firstClass:{id:2,qp_name:'施工员'},secondClass:[{id:21,qk_name:'土建'},{id:22,qk_name:'设备安装'},{id:23,qk_name:'市政'},{id:24,qk_name:'装饰'}]},
				{firstClass:{id:3,qp_name:'材料员'},secondClass:[{id:31,qk_name:'专业基础知识'},{id:32,qk_name:'专业管理实务'}]},
				{firstClass:{id:4,qp_name:'标准员'},secondClass:[{id:41,qk_name:'专业基础知识'},{id:42,qk_name:'专业管理实务'}]},
				{firstClass:{id:5,qp_name:'质量员'},secondClass:[{id:51,qk_name:'土建'},{id:52,qk_name:'市政'},{id:53,qk_name:'设备安装'},{id:54,qk_name:'装饰'}]},
				{firstClass:{id:6,qp_name:'安全员'},secondClass:[{id:61,qk_name:'专业基础知识'},{id:62,qk_name:'专业管理实务'}]},
				{firstClass:{id:7,qp_name:'机械员'},secondClass:[{id:71,qk_name:'专业基础知识'},{id:72,qk_name:'专业管理实务'}]},
				{firstClass:{id:8,qp_name:'劳务员'},secondClass:[{id:81,qk_name:'专业基础知识'},{id:82,qk_name:'专业管理实务'}]}
		];
		**/
		JSI.getPostKnowList = function (func){
			var method = "getPostKnowList";
			var params = {};
			callAndroidMethod(method,params,func);
		}

		/**
		*获取模拟试卷列表 SimulateTest.vue
		*@return 
		* [
				{id:1,pt_name:'2018年资料员专业基础知识试题一',status:1},
				{id:2,pt_name:'2018年资料员专业基础知识试题二',status:0},
				{id:3,pt_name:'2018年资料员专业基础知识试题三',status:0},
				{id:4,pt_name:'2018年资料员专业基础知识试题四',status:0},
				{id:5,pt_name:'2018年资料员专业基础知识试题五',status:0}
		];
		**/
		JSI.getAllPageTbl = function (userId,func){
			var method = "getAllPageTbl";
			var params = {"u_id":userId};
			callAndroidMethod(method,params,func);
		}
		/**
		*根据id获取模拟试卷信息 TestStart.vue
		*@return
		*{
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
					pt_memo:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。"
				};

		**/
		JSI.getPageTblById = function (id,func){
			var method = "getPageTblById";
			console.log("getPageTblById:"+id);
			var params = {"id":id};
			callAndroidMethod(method,params,func);
		}
		/**
		*根据id获取模拟试卷试题列表 SimulateTest.vue，TestStart.vue
		*@return 
		*[
				{	
					id:1,
					q_name:'单选试题名称',
					q_type:1,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:2,
					q_name:'多选试题名称',
					q_type:2,//类型：单选-1、多选-2、判断-3		
					q_result:[1,2],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:3,
					q_name:'判断试题名称',
					q_type:3,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B']
				}];
		**/
		JSI.getPageTblObjectById = function (id,func){
			var method = "getPageTblObjectById";
			console.log("getPageTblObjectById:"+id);
			var params = {"id":id};		
			callAndroidMethod(method,params,func);
		}
		/**
		*保存模拟试卷试题答案 TestItem.vue
		*参数同 saveExamResult
		**/
		JSI.savePageTblObject = function (u_id,p_id,score,date,qalist,func){
			var method = "savePageTblObject";		
			var params = {
				u_id:u_id,
				p_id:p_id,
				score:score,
				date:date,
				qalist:qalist
			};		
			console.log("savePageTblObject"+JSON.stringify(params));
			callAndroidMethod(method,params,func);
		}

		 /**
	     * 初始化题库根据岗位、知识点和题型  Header.vue,Engineer.vue
	     * @param params {"post":"1","know":"2","qtype":"1"}或{"post":"1","know":"2"}
	     * @param func 回调函数
	     * @return
	     */
	    JSI.initQuestionBank = function(params,func){
	        var method ="initQuestionBank";
	        callAndroidMethod(method,params,func);
	    }

	    /**
	     * 根据岗位、知识点、题型和数量生成随机试题 FastTest.vue
	     * @param params {"u_id":"001",post":"1","know":"2","qtype":"1","num":5}或{"post":"1","know":"2","num":5}
	     * @param func 回调函数
	    	*@return 
		*[
				{	
					id:1,
					q_name:'单选试题名称',
					q_type:1,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:2,
					q_name:'多选试题名称',
					q_type:2,//类型：单选-1、多选-2、判断-3		
					q_result:[1,2],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:3,
					q_name:'判断试题名称',
					q_type:3,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B']
				}];
	     */
	    JSI.genPostKnowQuestions = function(params,func){
	        var method ="genPostKnowQuestions";
	        callAndroidMethod(method,params,func);
	    }
	    /**
	    *根据用户id取得指定数量指定题型的错题 WrongTest.vue
	    *@param params{post":"1","know":"2",'num':5,'q_type':'1','u_id':'001'}
	    **@return 
		*[
				{	
					id:1,
					q_name:'单选试题名称',
					q_type:1,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:2,
					q_name:'多选试题名称',
					q_type:2,//类型：单选-1、多选-2、判断-3		
					q_result:[1,2],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:3,
					q_name:'判断试题名称',
					q_type:3,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B']
				}];
	    */
	    JSI.generateNoRepeatWrongRandom = function(params,func){
	    	var method = 'generateNoRepeatWrongRandom';
	    	console.log("genWrongQuestions:"+JSON.stringify(params))
	    	callAndroidMethod(method,params,func);
	    }

	    /**
	    *根据用户名/手机号验证用户 Login.vue,router/index.js
	    *@param params {"phone_name":"13800138000","pswd":"1"}
	    *@return 成功返回用户ID,失败返回0
	    */
	    JSI.verifyUser = function(params,func){
	    	var method = "verifyUser";
	    	callAndroidMethod(method,params,func);
	    }
	    /****
	    *练习提交试题 TestItem.vue
	    *type 练习类型：0-快速练习，1-考点练习，2-错题重做
	    *userId 考生id
	    *itemIds 错题id的数组
	    */
	    JSI.testItemSubmit = function(type,userId,itemIds,func){
			var method = "testItemSubmit";
			var params = {"type":type,"u_id":userId,"item_ids":itemIds};
	    	callAndroidMethod(method,params,func);
	    }
	    /**
	    *根据用户id查询测试记录 TestHis.vue
	    * 返回list[{{id:1,
					pt_name:'2018年资料员专业基础知识试题一2018年资料员专业基础知识试题一',
					date:'2018-07-11 10:10:32',
					score:50}}]
	    */
	    JSI.checkHisItemList = function(userId,func){
	    	var method = "checkHisItemList";
	    	var params = {"u_id":userId};
	    	callAndroidMethod(method,params,func);
	    }
	    /**
	    *根据用户id和试卷id获取答题详细记录 TestHis.vue
	    *返回试题list	[{	
							id:1,
							q_name:'单选试题名称',
							q_type:'1',//类型：单选-1、多选-2、判断-3		
							q_result:[1],//1,2,3,4对应ABCD
							answer_ids:[2],//答题结果
							q_option:['选项A','选项B','选项C','选项D']
						},
	    */
	    JSI.checkHisItemDetail = function(userId,paperId,func){
	    	var method = "checkHisItemDetail";
	    	var params = {"u_id":userId,"p_id":paperId};
	    	callAndroidMethod(method,params,func);
	    }

	    /**
	    *获取当前用户所有错题列表,和试题的详细信息	MyWrong.vue
				格式：数组
				[{	id:'1',
					q_name:'试题名称',
					date:'答题时间2018-07-11 10:23:30',
					q_type:'3',//类型
					q_result:[1],
					q_option:['选项A','选项B']
					}]
	    */
	    JSI.getAllWrongQuestions = function(userId,func){
	    	var method = "getAllWrongQuestions";
	    	var params = {"u_id":userId};
	    	callAndroidMethod(method,params,func);
	    }    
		
		  /**
			* 得到考试试卷 Home.vue
			* @return
			*  {
				pt_name:"2018年资料员专业考试试题",				
				pt_single_num:30,
				pt_single_score:1,
				pt_multi_num:20,
				pt_multi_score:2,
				pt_tf_num:20,
				pt_tf_score:1.5,				
				answer_time:"120",
				type_num:"单选题（30）多选题（20）判断题（20）",
				total_score:100,
				pt_memo:"2018年资料员专业基础知识试题一，本试卷是为考资料员考试的考生准备的专业基础知识试题及答案练习。",
				exam_date:'2018-8-31 15:00:00',
				submit_date:null
			};
			*/
		  JSI.getExamTemplate = function(func){
			var method = "getExamTemplate";
			var params = {};
			callAndroidMethod(method,params,func);
		  }

		  /**
			*  获取考试试题列表 ExamStart.vue
	 		**@return 
				*[
				{	
					id:1,
					q_name:'单选试题名称',
					q_type:1,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:2,
					q_name:'多选试题名称',
					q_type:2,//类型：单选-1、多选-2、判断-3		
					q_result:[1,2],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:3,
					q_name:'判断试题名称',
					q_type:3,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B']
				}];
			*/
		  JSI.getExamTemplateQuestions = function(func){
			var method = "getExamTemplateQuestions";
			var params = {};
			callAndroidMethod(method,params,func);
		  }
		  /**
		  *   保存考试试卷试题答案 TestItem.vue
		  *   参数{	"u_id":"001",
		  *   		"p_id":"1",
		  *   		"score":0,
		  *   		"date":"2018-09-25 10:34:47",
		  *   		"qalist":[
		  *   			{"num":1,"id":1,"res":0,"result":[1],"answer_id":[2]},
		  *   			{"num":2,"id":2,"res":0,"result":[1,2],"answer_id":[1,3]},
		  *   			{"num":3,"id":3,"res":0,"result":[1],"answer_id":[1]}
		  *   		]
		  *   	}
		  *   @return 0|1
		  */
		JSI.saveExamResult = function (u_id,p_id,score,date,qalist,func){
			var method = "saveExamResult";		
			var params = {
				u_id:u_id,//考生id
				p_id:p_id,//当前试卷id
				score:score,//分数
				date:date,//提交时间
				qalist:qalist//答题结果
			};	
		  
		  	callAndroidMethod(method,params,func);
		}
		/**提交试卷到服务器  Admin.vue
		**/
		JSI.submitExamResult = function(func){
			var method = "submitExamResult";
			var params = {};
			callAndroidMethod(method,params,func);
		}
		  /**
		 * 根据岗位、知识点获取考点列表 PointTest.vue
		 * @param params {"post":"1","know":"2"}
		 * @param func 回调函数
		 * @return [{qpt_id: 1,
					qpt_name: "考点1"}]
		 */
		JSI.genPostKnowPoints = function(params,func){
			var method ="genPostKnowPoints";
			callAndroidMethod(method,params,func);
		}
	  /**
		 * 根据岗位、知识点、考点、获取试题列表 PointTest.vue
		 * @param params {"post":"1","know":"2","point":"3"}
		 * @param func 回调函数
			*@return 
		*[
				{	
					id:1,
					q_name:'单选试题名称',
					q_type:1,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:2,
					q_name:'多选试题名称',
					q_type:2,//类型：单选-1、多选-2、判断-3		
					q_result:[1,2],//1,2,3,4对应ABCD
					q_option:['选项A','选项B','选项C','选项D']
				},
				{	id:3,
					q_name:'判断试题名称',
					q_type:3,//类型：单选-1、多选-2、判断-3		
					q_result:[1],//1,2,3,4对应ABCD
					q_option:['选项A','选项B']
				}];
		 */
		JSI.genPostKnowPointsQuestions = function(params,func){
			var method ="genPostKnowPointsQuestions";
			callAndroidMethod(method,params,func);
		}
		/**
		*得到pdf路径 ReadBook.vue
		*@return[
			{
				id:1,
				name:'建筑八大员考试参考资料文档一',
				url:'./static/a.pdf'
			},
			{
				id:2,
				name:'建筑八大员考试参考资料文档二',
				url:'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf'
			}]
		*/
		JSI.getPdfFile = function(func){
			var method = "getPdfFile";
			var params = {};
			callAndroidMethod(method,params,func);
		}

		//var invoke = function(params){}
		var invoke = {};
		var callAndroidMethod = function(method,params,func){
			invoke[method] = func;
			params["method"] = method;
			params["callback"] = "JSI.callback";
			
			//invoke("001");
			window.JSI.invokeMethod(method,JSON.stringify(params));
		}

		JSI.callback = function(method,data){
			console.log("JSI.callback："+method+" func:"+invoke[method]);
			invoke[method](data);
			/*if(typeof invoke=='function'){
				invoke(params);
			}*/
		}
	//window.JSI = JSI
	})();