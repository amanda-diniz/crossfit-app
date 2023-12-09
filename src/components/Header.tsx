import { Box, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export function Header() {
  return (
    <Box bg="gray" w="100%" p={4} color="white">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Link p='10' as={NextLink} href="/profile">
          Perfil
        </Link>
        <Link p='10'as={NextLink} href="/prs">
          Registro de PR
        </Link>
        <Link p='10' as={NextLink} href="/repetitions">
          Registro de repetições
        </Link>
      </Flex>
    </Box>
  );
}
