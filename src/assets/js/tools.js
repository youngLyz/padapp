
exports.install = function (Vue, options) {
	
	var formatTime = function(time) {
		if(time < 10){
			time = '0'+time
		}
		return time;
	}


	Vue.prototype.formatDate = function (date) {
		let year = date.getFullYear(),
			month = date.getMonth()+1,
			day = date.getDate(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds();
		return year + "-" +	 formatTime(month) + "-" + formatTime(day) 
			+ " " + formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
	}
}