function setCookieOptie1(cname, cvalue) {
	const d = new Date();
	const time = d.getTime();
	const dayInMiliseconds = 1000 * 3600 * 24;
	const expireTime = time + (dayInMiliseconds * 5);
	d.setTime(expireTime);

	const cookieString = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
	document.cookie = cookieString;
}

function setCookieOptie2(cname, cvalue) {
	const d = new Date(2024, 0, 1, 0);

	const cookieString = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
	document.cookie = cookieString;
}