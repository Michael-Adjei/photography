import { Raleway} from 'next/font/google'
import './globals.css'
import Navbar from './component/Navbar'

const raleway = Raleway({ subsets: ['latin']})

export const metadata = {
  title: 'Photography App',
  description: 'Develop Beautiful Images with Next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
       <Navbar/>
        {children}
        </body>
    </html>
  )
}
