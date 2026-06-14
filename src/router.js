import { About } from "./components/about.js"
import { Contact } from "./components/contact.js"
import { Hero } from "./components/hero.js"
import { Skills } from "./components/skills.js"



const routes = {
  '/': Hero,
  '/about': About,
  '/skills': Skills,
  "/contact": Contact,

}

export function router() {
  const path = window.location.pathname
  return routes[path] || Hero
}

export function initRouter(render) {

  window.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]')

    if (!link) return

    e.preventDefault()

    const href = link.getAttribute('href')

    window.history.pushState(null, '', href)

    render()
  })

  window.addEventListener('popstate', render)
}

