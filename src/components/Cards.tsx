import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CgGym } from "react-icons/cg";
import { GiJumpingRope } from "react-icons/gi";

export function Cards() {
  return (
    <>
      <SimpleGrid
        spacing={8}
        columns={2}
      >
        <Card variant="outline">
          <CardHeader>
            <HStack justifyContent="space-between">
              <Heading size="md">Registro de PR</Heading>
              <CgGym size="1.5rem" />
            </HStack>
          </CardHeader>
          <CardBody>
            <Text>
              Seu registro de PR ajudará a celebrar suas realizações e a se
              desafiar a alcançar novos patamares.
            </Text>
          </CardBody>
          <CardFooter>
            <NextLink href="/prs">
              <Button>Acesse aqui</Button>
            </NextLink>
          </CardFooter>
        </Card>
        <Card variant="outline">
          <CardHeader>
            <HStack justifyContent="space-between">
              <Heading size="md">Registro de repetições</Heading>
              <GiJumpingRope size=" 2rem" />
            </HStack>
          </CardHeader>
          <CardBody>
            <Text>
              Registre suas séries e quantidades de repetições alcançadas!
              Desafie-se a superar seus próprios limites!
            </Text>
          </CardBody>
          <CardFooter>
            <NextLink href="/repetitions">
              <Button>Acesse aqui</Button>
            </NextLink>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
