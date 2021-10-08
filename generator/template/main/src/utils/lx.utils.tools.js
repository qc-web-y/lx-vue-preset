export function hasDef (val) {
  return val !== '' && val !== undefined && val !== null && val !== 0
}

export function isFunction (val) {
  return val && typeof val === 'function'
}

export const log = (function () {
  const colorList = {
    red: '#e86c55',
    green: '#7bc08c',
    yellow: '#db9f55',
    blue: '#71bef2',
    magenta: '#d290e4',
    cyan: '#66c2cd'
  }

  const log = {}

  Object.keys(colorList).forEach(k => {
    const c = colorList[k]
    log[k] = msg => console.log(`%c${msg}`, `color:${c};`)
    log[k + 'Blod'] = msg => console.log(`%c${msg}`, `color:${c}; font-weight: bold;`)
  })

  return log
})()
