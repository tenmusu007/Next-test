
import type { AppProps } from 'next/app'
import Layout from '../components/Header'
import ContextAuth from '../useContext/useAuthContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
		<ContextAuth>
			<Component {...pageProps} />
		</ContextAuth>
	);
}
