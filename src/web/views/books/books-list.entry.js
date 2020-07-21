// 加载组件里面html页面用到的JavaScript脚本,交给webpack  

// 再由webpack反向的把分析好的js文件塞回 injectjs里面

import banner from '@/components/banner/banner';

banner.init();