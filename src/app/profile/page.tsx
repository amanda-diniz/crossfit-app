"use client";
import {
  Heading,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Button,
  ButtonGroup,
  Container
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Container pb={10} pt={10}>
        <Card>
          <CardHeader>
            <Heading size="md">Seus dados</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing="4">
              <FormControl>
                <FormLabel>Nome do usuário</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel>Peso</FormLabel>
                <NumberInput defaultValue={0} min={0} max={1000}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <ButtonGroup variant="outline" spacing="6">
                <Button colorScheme="blue">Save</Button>
                <Button>Cancel</Button>
              </ButtonGroup>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
