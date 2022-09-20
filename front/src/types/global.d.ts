import { ITools } from '@/utils/tools'
import type { IAjax } from '@/utils/request'

declare global{
    const Tools: ITools
    const Ajax: IAjax 

    type ITimeout = ReturnType<typeof setTimeout>

    interface Window{
        Tools: ITools;  // 全局工具库对象, 其中包含一些公用方法
        Ajax: IAjax;    // 全局Ajax请求库
    }
}

// https://vuejs.org/api/utility-types.html#componentcustomproperties
// 为了让<template>中的lpk在typescript环境不会报错, 还需要增加下面声明
// 注意: 该声明必须放置到module中, 否则就会覆盖全局类型, 而不是增强全局类型
declare module 'vue' {
    interface GlobalComponents{
        // Icon: typeof Icon
    }

    interface ComponentCustomProperties {
      Tools: ITools;
    }
}

export {}