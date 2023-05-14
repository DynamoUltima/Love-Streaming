import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";
import { ThemeProvider } from "@material-tailwind/react";
import HomePage from 'components/layout/wrapper';
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'
import { useState } from 'react';
import { AuthContextProvider } from '../components/context/authContext';




function MyApp({ Component, pageProps }: AppProps) {


  const [queryClient] = useState(() => new QueryClient());


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthContextProvider>
          <ThemeProvider>

            <HomePage >

              <Component {...pageProps} />
              {/* <div className="  md:hidden ">
          <NavigationBar />
        </div> */}
            </HomePage>

          </ThemeProvider>
        </AuthContextProvider>
      </Hydrate>
    </QueryClientProvider>

  )
}
export default MyApp
