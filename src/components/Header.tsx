import { Box, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";

export function Header() {
  return (
    <Box
      borderBottom="1px"
      borderBottomColor="lightgray"
      borderBottomStyle="solid"
      w="100%"
      p={8}
    >
      <Flex minWidth="max-content" alignItems="center" gap="2" justifyContent="space-between">
        <Logo />
        <Box>
          <Link p="10" as={NextLink} href="/">
            Home
          </Link>
          <Link p="10" as={NextLink} href="/prs">
            Registro de PR
          </Link>
          <Link p="10" as={NextLink} href="/repetitions">
            Registro de repetições
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
