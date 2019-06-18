/*
*随机生成指定长度汉字
*/ 
let getRandomHz = (var = 3) => {
	let str = ''
	let randomHz = () => {
		let word
	    eval( "word=" +  '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"')
	    return String(word, 'GBK')
	}
	for(let i = 0; i < val; i++){
		str+=randomHz()
	}
	return str
}

