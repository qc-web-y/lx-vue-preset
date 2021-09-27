export function hasDef (val) {
  return val !== '' && val !== undefined && val !== null && val !== 0
}

export function isFunction (val) {
  return val && typeof val === 'function'
}
