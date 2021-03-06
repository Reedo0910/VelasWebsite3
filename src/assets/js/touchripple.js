/**
 * Vue-touch-ripple
 * Adapted from rippleJS (https://github.com/samthor/rippleJS)
 */

const classlist = require('./classlist')

// startRipple
const startRipple = function(eventType, event) {
  // 获取事件目标元素
  var holder = event.currentTarget || event.target

  // console.log(holder)

  // 当前元素不能包含既定元素
  if (!classlist.contains(holder, 'touch-ripple')) {
    if (!holder) return
    holder = holder.querySelector('.touch-ripple')
    if (!holder) return
  }

  var prev = holder.getAttribute('data-ui-event')
  if (prev && prev !== eventType) return

  holder.setAttribute('data-ui-event', eventType)

  // Create and position the ripple
  var rect = holder.getBoundingClientRect()
  var x = event.offsetX
  var y

  if (x !== undefined) {
    y = event.offsetY
  } else {
    x = event.clientX - rect.left
    y = event.clientY - rect.top
  }

  var ripple = document.createElement('div')
  var max

  if (rect.width === rect.height) {
    max = rect.width * 1.412
  } else {
    max = Math.sqrt(
      (rect.width * rect.width) + (rect.height * rect.height)
    )
  }

  var dim = (max * 2) + 'px'

  ripple.style.width = dim
  ripple.style.height = dim
  ripple.style.marginLeft = -max + x + 'px'
  ripple.style.marginTop = -max + y + 'px'

  // Activate/add the element
  ripple.className = 'ripple'
  holder.appendChild(ripple)

  setTimeout(function() {
    classlist.add(ripple, 'held')
  }, 0)

  var releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend')

  var release = function() {
    document.removeEventListener(releaseEvent, release)

    classlist.add(ripple, 'done')

    // Larger than the animation duration in CSS
    setTimeout(function() {
      holder.removeChild(ripple)

      if (!holder.children.length) {
        classlist.remove(holder, 'active')
        holder.removeAttribute('data-ui-event')
      }
    }, 450)
  }

  document.addEventListener(releaseEvent, release)
}

// 鼠标按下
const handleMouseDown = function(e) {
  // Trigger on left click only
  if (e.button === 0) {
    startRipple(e.type, e)
  }
}

// 触摸事件开始
const handleTouchStart = function(e) {
  var touchs = e.changedTouches;
  if (touchs) {
    touchs.forEach(function (t) {
      startRipple(e.type, t)
    });
  }
}

module.exports = {
  startRipple: startRipple,
  handleMouseDown: handleMouseDown,
  handleTouchStart: handleTouchStart
}
