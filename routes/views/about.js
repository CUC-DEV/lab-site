var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'about';
	locals.page.title = 'About SydJS';
	
	locals.organisers = [
		{ name: '方糖', image: '/images/organiser-craig_sharkie.jpg', weibo: 'twalve',       title: 'Founder, MC, coordinator' },
		{ name: '曾䶮', image: '/images/organiser-zeng_yan.jpg',   weibo: 'allenxiaoai', title: 'Atlassian coordinator' },
		{ name: '仇紫荷',image: '/images/organiser-gil_davidson.jpg',     weibo: 'u/2668961191',   title: 'Atlassian coordinator' },
		{ name: '应泽峰', image: '/images/organiser-adam_ahmed.jpg',    weibo: 'u/5019398138',   title: 'Atlassian coordinator' },
		{ name: '傅思喆', image: '/images/organiser-lachlan_hardy.jpg', weibo: 'u/1261158735', title: 'Atlassian coordinator' }
	]
	
	view.render('site/about');
	
}
