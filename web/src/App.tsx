import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { Magic } from 'magic-sdk'
import { useEffect } from 'react'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'

const App = () => {
  let m

  useEffect(() => {
    m = new Magic(process.env.MAGICLINK_PUBLIC)

    m.preload()
  }, [])

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <AuthProvider client={m} type="magicLink">
        <RedwoodProvider titleTemplate="%PageTitle · %AppTitle">
          <RedwoodApolloProvider useAuth={useAuth}>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </AuthProvider>
    </FatalErrorBoundary>
  )
}

export default App
