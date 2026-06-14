export function toggleTheme() {
  const html = document.documentElement

  const isDark = html.classList.toggle("dark")

  localStorage.setItem("theme", isDark ? "dark" : "light")

  const btn = document.getElementById("themeBtn")
  if (btn) {
    btn.textContent = isDark ? "☀️" : "🌙"
  }
}
export function loadTheme() {
  const saved = localStorage.getItem("theme")

  if (saved === "dark") {
    document.documentElement.classList.add("dark")
  }

  const btn = document.getElementById("themeBtn")
  if (btn) {
    btn.textContent = saved === "dark" ? "☀️" : "🌙"
  }
}



