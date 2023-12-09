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
  Text,
} from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";
import { GYMNASTIC_EXERCISES } from "@/lib/data";

export function GymnasticForm() {
  return (
    <>
      <Card>
        <CardHeader pb={1}>
          <Heading size="md">Registro de repetições</Heading>
          <Text fontSize="16px" color="gray">
            Registre suas séries e quantidades de repetições alcançadas!
            Desafie-se a superar seus próprios limites!
          </Text>
        </CardHeader>
        <CardBody>
          <Stack spacing="2">
            <FormControl>
              <FormLabel>Exercício</FormLabel>
              <Select placeholder="Escolha o exercício">
                {" "}
                {GYMNASTIC_EXERCISES.map((exercise) => {
                  return (
                    <option value={exercise.name} key={exercise.name}>
                      {exercise.label}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Repetições</FormLabel>
              <NumberInput defaultValue={0} min={0} max={1000}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Data</FormLabel>
              <DatePicker initialValue={new Date()} />
            </FormControl>
            <ButtonGroup variant="outline" spacing="6">
              <Button colorScheme="blue">Save</Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
