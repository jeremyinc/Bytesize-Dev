var breakpoints = [576, 768, 1080, 1320]

var mq = breakpoints.map(breakpoint => {
  return `@media (max-width:${breakpoint}px)`
})

export default mq
