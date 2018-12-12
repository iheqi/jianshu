import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title: '程序员注意了，北京西二旗程序员因为这个被捕了',
  content: `
    <img src="https://upload-images.jianshu.io/upload_images/13736615-181b29de03be1dd2?imageMogr2/auto-orient/strip%7CimageView2/2/w/301/format/webp"/>
    <p>
      据北京公安最近公告，海淀分局警务支援大队，近日破获一起离职员工通过非法提高个人权限，盗取原公司关键信息数据，倒卖获利近800万元的非法获取计算机信息系统数据案，抓获犯罪嫌疑人两名。
    </p>  
  `
});
export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}


