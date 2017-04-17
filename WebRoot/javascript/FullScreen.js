function OpenFullWin(Url)// 鎵撳紑鏂扮獥鍙ｅ苟璋冪敤涓嬮潰鐨刢losewin鏂规硶鍏抽棴鍘熸潵鐨勭獥鍙�
{
	var width = screen.availWidth;
	var height = screen.availHeight;
	open(
			Url,
			'main',
			'width='
					+ (width - 10)
					+ ',height='
					+ (height - 35)
					+ ',left=0,top=0,menubar=no,toolbar=no,location=no,status=yes,scrollbars=no,resizable=no');
	if (window.parent == window)
		CloseWin();
}

function CloseWin()// 鍏抽棴绐楀彛
{
	var ua = navigator.userAgent
	var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false
	if (ie) {
		var IEversion = parseFloat(ua.substring(ua.indexOf("MSIE ") + 5, ua
				.indexOf(";", ua.indexOf("MSIE "))))
		if (IEversion < 5.5) {
			var str = '<object id=noTipClose classid="clsid:ADB880A6-D8FF-11CF-9377-00AA003B7A11">'
			str += '<param name="Command" value="Close"></object>';
			document.body.insertAdjacentHTML("beforeEnd", str);
			document.all.noTipClose.Click();
		} else {
			parent.opener = null;
			parent.close();
			// window.opener =null;
			// window.close();
		}
	}
}