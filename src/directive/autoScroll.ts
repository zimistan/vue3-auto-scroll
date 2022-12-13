import {App, DirectiveBinding, VNode} from "vue";

//这个属性得替换
let speed = 20
const autoScroll = (app: App) => app.directive('autoScroll', scrollDirective)

const scrollDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<any>) {
    startScroll(el)
  },
  updated(el: HTMLElement, binding: DirectiveBinding<any>) {
  }
}
//开始滚动
const startScroll = (element: HTMLElement) => {
  return window.requestAnimationFrame(() => scroll(element))
}
//滚动
const scroll = (element: HTMLElement, oldTime: number = 0, timeStamp: number = 0) => {
  window.requestAnimationFrame((time) => {
    if (timeStamp > 1000 / speed) {
      element.scrollTop += calcPxSpeed()
      timeStamp = 0
    }
    scroll(element, time, timeStamp + time - oldTime)
  })
}
//停止滚动
const stopScroll = (element: HTMLElement) => {
  console.log("stop:", element)
}

const calcPxSpeed = (): number => {
  if (speed < 1000) {
    return 1
  } else {
    return Number((speed / 1000).toFixed(1))
  }
}

export {
  autoScroll
}