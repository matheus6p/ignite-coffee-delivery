import { GlobalStyles } from './styles/global'
import { Header } from './components/Header/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Home } from './pages/Home/index.tsx'
import { ProductsContextProvider } from './context/ProductsContext.tsx'
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <Header />
        <Home />
      </ProductsContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
