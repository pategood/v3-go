// export interface Enums {
//   value: string;
//   label: string;
// }

// /**
//  * @description 对象数组转换成枚举数组
//  * @param datasource obejct[]
//  * @param lName
//  * @param vName
//  * @returns enums[]
//  */
// const ToEnums = (datasource: object[], lname: string, vname: string): Enums[] => {
//   if (!datasource?.length) {
//     throw new Error(`${datasource} 需为对象数组，且长度不为0`);
//   }
//   const arr: Enums[] = [];
//   datasource.forEach((item) => {
//     arr.push({
//       label: item[lname],
//       value: item[vname],
//     });
//   });
//   return arr;
// };

// const getFloat = (num:any, n:any) => {
//   n = n ? parseInt(n) : 0;
//   if (n <= 0) {
//     return Math.round(num);
//   }
//   num = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // 四舍五入
//   num = Number(num).toFixed(n); // 补足位数
//   if (num === '0.000') {
//     num = 0.001;
//   }
//   return num;
// };
// export { ToEnums, getFloat };


/**
 * @description 生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
 export function randomNum(min: number, max: number): number {
    let num = Math.floor(Math.random() * (min - max) + max);
    return num;
  }
  
  /**
   * @description 判断数据类型
   * @param val 需要判断类型的数据
   * @returns {string} 数据类型
  */
  export function isType(val: any): string {
      if (val === null) return "null";
      if (typeof val !== "object") return typeof val;
      else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
  }