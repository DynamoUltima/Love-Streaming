import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";
import { ThemeProvider } from "@material-tailwind/react";
import HomePage from './homePage';
import NavigationBar from '../components/ui/navigationBar';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      
      <HomePage >

        <Component {...pageProps} />
        {/* <div className="  md:hidden ">
          <NavigationBar />
        </div> */}
      </HomePage>

    </ThemeProvider>

  )
}
export default MyApp
