import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { store } from './store'

// Safeguard: Ensure iframe contentDocument is only accessed when its documentElement is ready
const origContentDoc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentDocument');
if (origContentDoc && origContentDoc.get) {
  const origGet = origContentDoc.get;
  Object.defineProperty(HTMLIFrameElement.prototype, 'contentDocument', {
    configurable: true,
    enumerable: true,
    get() {
      const doc = origGet.call(this);
      if (doc && !doc.documentElement) {
        return null;
      }
      return doc;
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
