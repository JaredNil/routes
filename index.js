function generateBC(url, separator) {
	return url
		.split(/([/]|[\?=#&]\w*|www.|http:\/|https:\/|https:\/\/)/g)
		.filter(w =>
			(w == '' || w[0].match(/[?=#&/]/g) || w.match('www') || w.match('https://')
				|| w.match('https:/') || w.match('http:/')) ? false : true)
		.map(el => {
			el = el.toUpperCase()
			return (el.includes('.')) ? el.slice(0, el.indexOf('.')) : el
		})
		.map((el, i) => {
			if (i == 0) {
				return `HOME`
			} else return el
		})
		.filter(el => {
			return (el.match(/^INDEX/g)) ? false : true
		})
		.map((el, i, arr) => {
			extr = arr.length - 1
			if (arr.length == 1) { return `<span class="active">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</span>` }
			switch (i) {
				case 0:
					return `<a href="/">${el}</a>`
				case extr:
					return `<span class="active">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</span>`
				default:
					return `<a href="${route(arr, i)}">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</a>`
			}
		})
		.join(`${separator}`)
}



function route(arr, i) {
	path = ''
	for (let j = 1; j <= i; j++) {
		path += `/${arr[j]}`
	}
	return `${path}/`.toLowerCase()
}
function stratch(el) {
	return el.split(' ').filter(l => {
		return (l.match(/^THE|^OF|^IN$|^FROM|^BY|^WITH|^AND|^OR|^FOR|^TO|^AT|^A|^INDEX/g)) ? false : true
	}).map(l => l[0]).join('')
}

console.log(generateBC(
	"facebook.fr/of-bladder-to-paper-kamehameha/meningitis-meningitis-of-surfer-diplomatic/transmutation-at-pippi-with-bed-at-or-biotechnology-insider/biotechnology-of-research-bed-meningitis-kamehameha"
	, " : "));



// function generateBC(url, separator) {
// 	console.log(url, separator)

// 	url = url
// 		.split(/([/]|[\?=#&]\w*|www.|http:\/|https:\/|https:\/\/)/g)

// 	console.log(url, 'BEGIN');

// 	url = url
// 		.filter(w =>
// 			(w == '' || w[0].match(/[?=#&/]/g) || w.match('www') || w.match('https://')
// 				|| w.match('https:/') || w.match('http:/')) ? false : true)
// 		.map(el => {
// 			el = el.toUpperCase()
// 			return (el.includes('.'))
// 				? el.slice(0, el.indexOf('.'))
// 				: el
// 		})
// 		.map((el, i) => {
// 			if (i == 0) {
// 				return `HOME`
// 			} else return el
// 		})
// 		.filter(el => {
// 			return (el.match(/^INDEX/g)) ? !true : !false
// 		})

// 	console.log(url, 'NEXT');

// 	url = url.map((el, i, arr) => {
// 		extr = arr.length - 1
// 		if (arr.length == 1) {
// 			return `<span class="active">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</span>`
// 		}

// 		switch (i) {
// 			case 0:
// 				return `<a href="/">${el}</a>`
// 			case extr:
// 				return `<span class="active">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</span>`
// 			default:
// 				return `<a href="${route(arr, i)}">${(el.length > 30) ? stratch(el.split('-').join(' ')) : el.split('-').join(' ')}</a>`
// 		}
// 	})


// 	console.log(url, 'END');

// 	let rez = url.join(`${separator}`)
// 	return rez





// 	function route(arr, i) {
// 		path = ''
// 		for (let j = 1; j <= i; j++) {
// 			path += `/${arr[j]}`
// 		}
// 		return `${path}/`.toLowerCase()
// 	}
// 	function stratch(el) {
// 		return el.split(' ').filter(l => {
// 			console.log(`+${l}+`);
// 			return (l.match(/^THE|^OF|^IN$|^FROM|^BY|^WITH|^AND|^OR|^FOR|^TO|^AT|^A|^INDEX/g)) ? !true : !false
// 		}).map(l => l[0]).join('')
// 	}
// }
