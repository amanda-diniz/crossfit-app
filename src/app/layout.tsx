import { Providers } from './providers'
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
      <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}