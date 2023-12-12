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
import { GYMNASTIC_EXERCISES } from "@/lib/data";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import { createRepetition } from "@/app/repetitions/actions";

export function GymnasticForm() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Card variant="outline">
        <CardHeader pb={1}>
          <Heading size="md">Registro de repetições</Heading>
          <Text fontSize="16px" color="gray">
            Registre suas séries e quantidades de repetições alcançadas!
            Desafie-se a superar seus próprios limites!
          </Text>
        </CardHeader>
        <CardBody>
          <form action={createRepetition}>
            <Stack spacing="2">
              <FormControl>
                <FormLabel>Exercício</FormLabel>
                <Select name="exercise" placeholder="Escolha o exercício">
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
                  <NumberInputField name="repetition"/>
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Data</FormLabel>
                <SingleDatepicker
                  date={date}
                  onDateChange={setDate}
                  name="date"
                />
              </FormControl>
              <ButtonGroup spacing="2">
                <Button colorScheme="blue" type="submit">
                  Salvar
                </Button>
                <Button>Cancelar</Button>
              </ButtonGroup>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
