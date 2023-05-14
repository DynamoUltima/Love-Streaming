import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import "swiper/css/bundle";
import { ThemeProvider } from "@material-tailwind/react";
import PageWrapper from 'components/layout/wrapper';
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'
import { useState } from 'react';
import { AuthContextProvider } from '../components/context/authContext';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter()


  return (
    <ChakraProvider theme={theme} resetCSS>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0
                },
                pageAnimate: {
                  opacity: 1,
                  transition: { duration: 0.5 }
                }
              }}
            >
               <AuthContextProvider>
                <ThemeProvider>

                  <PageWrapper >
                    <Component {...pageProps} />
                  </PageWrapper>

                </ThemeProvider>
              </AuthContextProvider>
            </motion.div>
      </AnimatePresence>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>

  )
}
export default MyApp
