/**
 * Format a date string
 * @param {string|Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  if (!date) return ""

  const d = new Date(date)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d)
}

/**
 * Truncate text to a specific length
 * @param {string} text - The text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, length = 100) {
  if (!text || text.length <= length) return text
  return text.slice(0, length) + "..."
}

/**
 * Scroll to a specific element on the page
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
export function scrollToElement(elementId, offset = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}

/**
 * Generate a slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} URL-friendly slug
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}
