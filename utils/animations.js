/**
 * Fade in animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Delay before animation starts in milliseconds
 */
export function fadeIn(element, duration = 500, delay = 0) {
  if (!element) return

  element.style.opacity = "0"
  element.style.transition = `opacity ${duration}ms ease ${delay}ms`

  setTimeout(() => {
    element.style.opacity = "1"
  }, 10)
}

/**
 * Slide in animation from bottom
 * @param {HTMLElement} element - The element to animate
 * @param {number} distance - Distance to slide in pixels
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Delay before animation starts in milliseconds
 */
export function slideInFromBottom(element, distance = 50, duration = 500, delay = 0) {
  if (!element) return

  element.style.transform = `translateY(${distance}px)`
  element.style.opacity = "0"
  element.style.transition = `transform ${duration}ms ease ${delay}ms, opacity ${duration}ms ease ${delay}ms`

  setTimeout(() => {
    element.style.transform = "translateY(0)"
    element.style.opacity = "1"
  }, 10)
}

/**
 * Animate counting up to a number
 * @param {HTMLElement} element - The element to update with the count
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} formatter - Optional function to format the number
 */
export function animateCounter(element, start, end, duration = 2000, formatter = null) {
  if (!element) return

  let startTime = null

  function animate(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const value = Math.floor(progress * (end - start) + start)

    element.textContent = formatter ? formatter(value) : value

    if (progress < 1) {
      window.requestAnimationFrame(animate)
    }
  }

  window.requestAnimationFrame(animate)
}

/**
 * Stagger animations for multiple elements
 * @param {NodeList|Array} elements - Collection of elements to animate
 * @param {Function} animationFn - Animation function to apply
 * @param {number} staggerDelay - Delay between each element's animation in milliseconds
 */
export function staggerAnimation(elements, animationFn, staggerDelay = 100) {
  if (!elements || !elements.length) return

  Array.from(elements).forEach((element, index) => {
    const delay = index * staggerDelay
    animationFn(element, delay)
  })
}
