/**
 * 事件池(事件管理器)
 * 通过事件监听传值
 */
export default class EventListener {
  constructor() {
    this.events = {};
  }
 
  // 监听
  on(eventName,callBack){
    if(this.events[eventName]){
      // 存在事件
      this.events[eventName].push(callBack);
    }else{
      // 不存在事件
      this.events[eventName] = [callBack];
    }
  }
 
  // 触发
  emit(eventName,params){
    if(this.events[eventName]){
      this.events[eventName].map((callBack) => {
        callBack(params);
      })
    }
  }
}
