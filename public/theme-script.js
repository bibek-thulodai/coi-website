// Inline script to ensure light theme is applied before page load
;(() => {
  try {
    // Clear any stored theme preference
    localStorage.removeItem("theme")

    // Set theme to light
    localStorage.setItem("theme", "light")

    // Remove any dark class from document
    document.documentElement.classList.remove("dark")

    // Add light class to document
    document.documentElement.classList.add("light")
  } catch (e) {
    console.error("Error setting default theme:", e)
  }
})()
