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
	JSI.initSystemDatabase = function (func){
		var method = "initSystemDatabase";
		var params = {};
		callAndroidMethod(method,params,func);
	}
	/**
	*获取人员一级大类和知识点二级分类
	**/
	JSI.getPostKnowList = function (func){
		var method = "getPostKnowList";
		var params = {};
		callAndroidMethod(method,params,func);
	}
	/**
	*更新当前选择的人员fid和知识点sid
	*/
	/*JSI.updatePostClass = function (fid,sid,func){
		var method = "updatePostClass";
		var params = {fid:fid,sid:sid};
		callAndroidMethod(method,params,func);
	}*/

	/**
	*获取模拟试卷列表
	**/
	JSI.getAllPageTbl = function (userId,func){
		var method = "getAllPageTbl";
		var params = {"u_id":userId};
		callAndroidMethod(method,params,func);
	}
	/**
	*根据id获取模拟试卷信息
	**/
	JSI.getPageTblById = function (id,func){
		var method = "getPageTblById";
		console.log("getPageTblById:"+id);
		var params = {"id":id};
		callAndroidMethod(method,params,func);
	}
	/**
	*根据id获取模拟试卷试题列表
	**/
	JSI.getPageTblObjectById = function (id,func){
		var method = "getPageTblObjectById";
		console.log("getPageTblObjectById:"+id);
		var params = {"id":id};		
		callAndroidMethod(method,params,func);
	}
	/**
	*根据id获取模拟试卷试题列表
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
     * 初始化题库根据岗位、知识点和题型
     * @param params {"post":"1","know":"2","qtype":"1"}或{"post":"1","know":"2"}
     * @param func 回调函数
     * @return
     */
    JSI.initQuestionBank = function(params,func){
        var method ="initQuestionBank";
        callAndroidMethod(method,params,func);
    }

    /**
     * 根据岗位、知识点、题型和数量生成随机试题
     * @param params {"u_id":"001",post":"1","know":"2","qtype":"1","num":5}或{"post":"1","know":"2","num":5}
     * @param func 回调函数
     * @return
     */
    JSI.genPostKnowQuestions = function(params,func){
        var method ="genPostKnowQuestions";
        callAndroidMethod(method,params,func);
    }
    /**
    *根据用户id取得指定数量指定题型的错题
    *@param params{post":"1","know":"2",'num':5,'q_type':'1','u_id':'001'}
    */
    JSI.generateNoRepeatWrongRandom = function(params,func){
    	var method = 'generateNoRepeatWrongRandom';
    	console.log("genWrongQuestions:"+JSON.stringify(params))
    	callAndroidMethod(method,params,func);
    }

    /**
    *根据用户名/手机号验证用户
    *@param params {"phone_name":"13800138000","pswd":"1"}
    *@return 成功返回用户ID,失败返回0
    */
    JSI.verifyUser = function(params,func){
    	var method = "verifyUser";
    	callAndroidMethod(method,params,func);
    }
    /****
    *练习提交试题
    *type 练习类型：0-快速练习，1-考点练习，2-错题重做
    */
    JSI.testItemSubmit = function(type,userId,itemIds,func){
		var method = "testItemSubmit";
		var params = {"type":type,"u_id":userId,"item_ids":itemIds};
    	callAndroidMethod(method,params,func);
    }
    /**
    *根据用户id查询测试记录
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
    *根据用户id和试卷id获取答题详细记录
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
    *获取当前用户所有错题列表,和试题的详细信息			
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
		* 得到考试试卷
		* @return
		*/
	  JSI.getExamTemplate = function(func){
		var method = "getExamTemplate";
		var params = {};
		callAndroidMethod(method,params,func);
	  }

	  /**
		*  获取考试试题列表
		*   @return
		*/
	  JSI.getExamTemplateQuestions = function(func){
		var method = "getExamTemplateQuestions";
		var params = {};
		callAndroidMethod(method,params,func);
	  }
	  /**
	  *   保存考试试卷试题答案
	  *   @return
	  */
	JSI.saveExamResult = function (u_id,p_id,score,date,qalist,func){
		var method = "saveExamResult";		
		var params = {
			u_id:u_id,
			p_id:p_id,
			score:score,
			date:date,
			qalist:qalist
		};	
	  
	  	callAndroidMethod(method,params,func);
	}
	/**提交试卷到服务器
	**/
	JSI.submitExamResult = function(func){
		var method = "submitExamResult";
		var params = {};
		callAndroidMethod(method,params,func);
	}
	  /**
	 * 根据岗位、知识点获取考点列表
	 * @param params {"post":"1","know":"2"}
	 * @param func 回调函数
	 * @return [{id:'001',name:'考点1'}]
	 */
	JSI.genPostKnowPoints = function(params,func){
		var method ="genPostKnowPoints";
		callAndroidMethod(method,params,func);
	}
  /**
	 * 根据岗位、知识点、考点、获取试题列表
	 * @param params {"post":"1","know":"2","point":"3"}
	 * @param func 回调函数
	 * @return []
	 */
	JSI.genPostKnowPointsQuestions = function(params,func){
		var method ="genPostKnowPointsQuestions";
		callAndroidMethod(method,params,func);
	}
	/**
	*得到pdf路径
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