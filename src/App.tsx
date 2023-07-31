import { GlobalStyles } from './styles/global'
import { Header } from './components/Header/index.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Home } from './pages/Home/index.tsx'
import { useEffect, useState } from 'react'

export function App() {
  // const [products, setProducts] = useState([])

  // async function fetchData() {
  //   try {
  //     const response = await fetch("http://localhost:5555/products")
  //     const jsonData = await response.json()
  //     console.log(jsonData)
  //     setProducts(jsonData)
  //   }
  //   catch (err) {
  //     console.log("errou")
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}
