const debounce = (fn, delay) => {
  let timeoutID

  return (...args) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => fn(...args), delay)
  }
}

export default {
  debounce
}

export {
  debounce
}
