import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}, {
		id: 2,
		title: '手绘',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}, {
		id: 3,
		title: '区块链',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}, {
		id: 4,
		title: '牛逼',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}, {
		id: 5,
		title: '我不是药神',
		imgUrl: '//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
	}],

	acticleList: [{
		id: 1,
		title: '写在使用 Linux 工作一年后',
		desc: '前言 经常看我博客和公众号的同学应该知道，我是狂热的Linuxer，对Linux系统有一种偏执的喜好，所以当你看到这篇文章的时候应该不会觉得奇怪...',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}, {
		id: 2,
		title: '写在使用 Linux 工作一年后',
		desc: '前言 经常看我博客和公众号的同学应该知道，我是狂热的Linuxer，对Linux系统有一种偏执的喜好，所以当你看到这篇文章的时候应该不会觉得奇怪...',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}, {
		id: 3,
		title: '写在使用 Linux 工作一年后',
		desc: '前言 经常看我博客和公众号的同学应该知道，我是狂热的Linuxer，对Linux系统有一种偏执的喜好，所以当你看到这篇文章的时候应该不会觉得奇怪...',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}, {
		id: 4,
		title: '写在使用 Linux 工作一年后',
		desc: '前言 经常看我博客和公众号的同学应该知道，我是狂热的Linuxer，对Linux系统有一种偏执的喜好，所以当你看到这篇文章的时候应该不会觉得奇怪...',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/8869373-1fd5163382f9a722.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}]
});

export default (state = defaultState, action) => {
	// immutable对象的set方法，会结合之前immutable对象的值
	// 和设置的值，返回一个全新的对象
	switch (action.type) {
		default:
			return state;
	}
}


