import '../styles/globals.css'
import {RobinhoodProvider} from '../context/RobinhoodContext'
import {MoralisProvider} from 'react-moralis'

export default function MyApp({ Component, pageProps }) {

  return (
      <MoralisProvider 
        serverUrl='https://azjja4t0imsb.usemoralis.com:2053/server'
        appId='fLIcQy5qcgEmrrOgwJX4XOfP6A2qJEldDq0KYxcE'
      >
        <RobinhoodProvider>
          <Component {...pageProps} />
        </RobinhoodProvider>
      </MoralisProvider>
    )
}
