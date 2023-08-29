import '../styles/globals.css'
import { ThemeProvider } from '@emotion/react';
import { theme } from '@closet-design-system/theme-connect';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
