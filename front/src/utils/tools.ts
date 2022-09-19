import cookies from "js-cookie";

const iTools = {
  //! 显示全局遮罩
  showLoadMask() {},
  //! 隐藏全局遮罩
  hideLoadMask() {},
  Router: {},

  LocalStorage: {
    // 本地存储存储命名空间
    setItem(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key: string) {
      const stValue = localStorage.getItem(key);
      try {
        return JSON.parse(stValue as string);
      } catch (e) {
        return stValue;
      }
    },
    removeItem(key: string) {
      localStorage.removeItem(key);
    },
  },
  Cookie: {
    setItem(key: string, value: string) {
      cookies.set(key, value, { expires: +new Date() });
    },
    getItem(key: string, defaultValue?: any) {
      const stValue = cookies.get(key) || defaultValue;
      try {
        return JSON.parse(stValue);
      } catch (e) {
        return stValue;
      }
    },
    removeItem(key: string) {
      cookies.remove(key);
    },
  },
};

export type ITools = typeof iTools;

export default iTools;
