import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@app/styles/index.less'
import { App } from '@app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
