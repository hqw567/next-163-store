export function convertParamsToQueryString(params: object) {
  return Object.entries(params)
    .map(([key, value]) => {
      return `${key}=${encodeURIComponent(JSON.stringify(value))}`
    })
    .join('&')
}

export function deepMerge(target: any, source: any) {
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source
  }

  Object.keys(source).forEach((key) => {
    if (typeof source[key] === 'object') {
      if (!target[key]) {
        target[key] = {}
      }
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  })

  return target
}
