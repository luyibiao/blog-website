/* 过滤器 */
const Filters = {}

// 用于 a 标签的 href 属性绑定链接时使用，
// 防止地址为空时点击a标签刷新页面。
// 检查 linkStr 是否为空，
Filters.checkHref = function (linkStr) {
    return linkStr || 'javascript:void(0);';
}

// 格式化date
// @param validDate 任何可以new Date()的有效日期
// @param fmt 形如 "yyyy-MM-dd hh:mm:ss", "MM月-dd日" 等字符串
Filters.formatDatetime = function(validDate, fmt) {
    if (typeof validDate === 'string'){
        validDate = validDate.replace('T',' ').replace(/-/g,'\/');
    } else if (!validDate){
        return '--';
    }
    let date = new Date(validDate);
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) 
        	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 将秒转为时分秒
Filters.formatSeconds = function (value) {
	var second = parseInt(value), // 秒 
		minute = 0, // 分
		hour = 0; // 小时 
	
	if(second > 60) { 
		minute = parseInt(second/60); 
		second = parseInt(second%60); 
		if(minute > 60) { 
			hour = parseInt(minute/60); 
			minute = parseInt(minute%60); 
		} 
	}
		
	var result = ""+parseInt(second)+"秒"; 
	if(minute > 0) { 
		result = ""+parseInt(minute)+"分"+result; 
	} 
	if(hour > 0) { 
		result = ""+parseInt(hour)+"小时"+result; 
	} 
	return result; 
}

// 格式化数字
// @param number 必需，要格式化的数字
// @param decimals 可选，规定多少个小数位，默认两位。
// @param point 可选，规定用作小数点的字符串（默认为 . ）。
// @param thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
Filters.formatNumber = function(number, decimals, point, thousands) {
    //https://github.com/txgruppi/number_format
    //form http://phpjs.org/functions/number_format/
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
        sep = typeof thousands === 'string' ? thousands : ",",
        dec = point || ".",
        s = '';

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    return s.join(dec);
}
function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return '' + (Math.round(n * k) / k).toFixed(prec);
}

//在formatNumber的基础上,百万级别用万为单位.
Filters.formatNumberUnit = function(value){
    const unit = '万';
    if (parseFloat(value) > 1000000){
        value = value / 10000;
        let args = [...arguments];
        args[0] = value;
        return Filters.formatNumber(...args) + unit
    } else {
        return Filters.formatNumber(...arguments)
    }
}

// 将html字符串中的文本提取出来;
// 用于微官网列表页中每一项的描述处;
Filters.htmlToText = function (html) {
	let div = document.createElement('div');
	div.innerHTML = html;
	return div.innerText;
}

// 从字符串中截取指定长度片段;
// 用于微官网列表页中每一项的描述处;
Filters.sliceText = function (text, start = 0, end = 150) {
	return text.slice(start, end)
}

let _reg = /<br\/?>$/;
let _map = {
	r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
	'<': '&lt;',
	'>': '&gt;',
	'&': '&amp;',
	' ': '&nbsp;',
	'"': '&quot;',
	"'": '&#39;',
	'\n': '<br/>',
	'\r': ''
}
Filters.escape = function(text) {
	_content = Filters.encode(_map, text)
	return _content.replace(_reg, '<br/>');
}

Filters.encode = function(_map, _content) {
	_content = '' + _content
	if (!_map || !_content) {
		return _content || ''
	}
	return _content.replace(_map.r, function($1) {
		var _result = _map[!_map.i ? $1.toLowerCase() : $1]
		return _result != null ? _result : $1
	});
};

// 男 女 的过滤器
Filters.Sex = sex =>{       
  var sexDate = sex == 1 ? "男" : "女";
  return sexDate
}
//  米转千米
Filters.formatDistance = function (distance) {
  if (typeof distance !== 'number' || +distance !== +distance) {
    return ''
  }
  if (distance < 1000) {
    return `${distance}m`
  }
  return `${(distance / 1000).toFixed(2)}km`
}


// 过滤状态类型
Filters.formatStatus = function(val, list) {
    if (!list || !list.length) return ''
    const instance = list.find(v => val == v.code)
    return instance ? instance.name : ''
}


export default Filters