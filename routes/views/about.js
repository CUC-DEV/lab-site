var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'about';
	locals.page.title = 'About SydJS';
	
	locals.organisers = [
		{ name: '方糖', image: '/images/organiser-ft.jpg', weibo: 'FangtangStudio', weiboID: 'u/5286061009' ,title: 'Founder, MC, coordinator' },
		{ name: '曾䶮', image: '/images/organiser-zeng_yan.jpg',   weibo: '曾龑', weiboID: 'allenxiaoai',title: 'Atlassian coordinator' },
		{ name: '仇紫荷',image: '/images/organiser-qzh.jpg',  weibo: '会铁砂掌的镁', weiboID: 'u/2668961191' ,title: 'Atlassian coordinator' },
		{ name: '应泽峰', image: '/images/organiser-yzf.jpg',   weibo: 'Yzfff8',  weiboID: 'u/5019398138' ,title: 'Atlassian coordinator' },
		{ name: '傅思喆', image: '/images/organiser-fsz.jpg', weibo: 'fusizhe', weiboID: 'u/1261158735',title: 'Atlassian coordinator' }
	]
	
	view.render('site/about');
	
}
