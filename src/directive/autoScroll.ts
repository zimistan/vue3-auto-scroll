import {App, DirectiveBinding, VNode} from "vue";

const autoScroll = (app: App) => app.directive('autoScroll', scrollDirective)

const scrollDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<any>) {
    startScroll(el)
  }
}

const startScroll = (element: HTMLElement) => {
  console.log("start:", element)
  window.requestAnimationFrame(() => scroll(element))
}

const scroll = (element: HTMLElement, timeStamp: number = 0, oldTime: number = 0) => {
  // console.log(element.scrollTop++);
  window.requestAnimationFrame((time) => {
    if (timeStamp > 2000) {
      timeStamp = 0
      scroll(element, timeStamp,time)
    }
  })
}

const stopScroll = (element: HTMLElement) => {
  console.log("stop:", element)
}

export {
  autoScroll
}