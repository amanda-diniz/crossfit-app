import { Box, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header() {
  return (
    <Box
      borderBottom="1px"
      borderBottomColor="lightgray"
      borderBottomStyle="solid"
      w="100%"
      p={4}
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Link p="10" as={NextLink} href="/">
          Home
        </Link>
        <Link p="10" as={NextLink} href="/profile">
          Perfil
        </Link>
        <Link p="10" as={NextLink} href="/prs">
          Registro de PR
        </Link>
        <Link p="10" as={NextLink} href="/repetitions">
          Registro de repetições
        </Link>
      </Flex>
    </Box>
  );
}
