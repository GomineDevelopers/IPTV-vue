//rem换算
(function (_D) {
	var _self = {};
	var UIsize = 1920;
	_self.resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	_self.Html = _D.getElementsByTagName("html")[0];
	_self.widthProportion = function () {
		var p = Number((_D.body && _D.body.clientWidth || _self.Html.offsetWidth) / UIsize).toFixed(3);
		return p > 1.067 ? 1.067 : p < 0.444 ? 0.444 : p
	};
	_self.changePage = function () {
		_self.Html.setAttribute("style", "font-size:" + _self.widthProportion() * 100 + "px");
		_self.correctPx()
	};
	_self.correctPx = function () {
		var docEl = document.documentElement;
		var clientWidth = docEl.clientWidth;
		if (!clientWidth || clientWidth > 768) return;
		var div = document.createElement('div');
		div.style.width = '1.4rem';
		div.style.height = '0';
		setTimeout(function () {
			document.body.appendChild(div);
		}, 0)
		var ideal = 140 * clientWidth / UIsize;
		var rmd = (div.clientWidth / ideal);
		// console.log(rmd);
		if (rmd > 1.2 || rmd < 0.8) {
			docEl.style.fontSize = 100 * (clientWidth / UIsize) / rmd + 'px';
			setTimeout(function () {
				document.body.appendChild(div);
			}, 0)
		}
	}
	_self.changePage()
	if (!document.addEventListener) return
	window.addEventListener(_self.resizeEvt, _self.changePage, false)
	document.addEventListener('DOMContentLoaded', _self.changePage, false)
})(document)
