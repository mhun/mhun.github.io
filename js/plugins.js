/*eslint-env jquery*/
// Avoid `console` errors in browsers that lack a console.
;(function () {
  var method
  var noop = function () {}
  var methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn',
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()

// Place any jQuery/helper plugins in here.

$(document)
  .on('mousemove touchstart', (e) => {
    e.preventDefault()
    $('.blob').css({
      left: e.pageX - $('.blob').width() / 2,
      top: e.pageY - $('.blob').height() / 2,
    })
  })
  .on('mouseleave', () => {
    $('.blob').removeAttr('style')
  })

$('.contact').on('click', function () {
  $('body').toggleClass('color')
})