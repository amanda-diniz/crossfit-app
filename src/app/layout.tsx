import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box bgImage="url('/background.jpg')" h="100vh" bgPosition="center" bgSize="cover">
          <Header />
          <Providers>{children}</Providers>
        </Box>
      </body>
    </html>
  );
}
