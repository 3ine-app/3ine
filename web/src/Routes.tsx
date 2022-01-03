import { useAuth } from '@redwoodjs/auth'
import { Route, Router, Set } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
        <Route path="/about" page={AboutPage} name="about" prerender />
        <Route path="/flashcards" page={FlashcardsPage} name="flashcards" />
        <Route notfound page={NotFoundPage} prerender />
      </Set>
    </Router>
  )
}

export default Routes
