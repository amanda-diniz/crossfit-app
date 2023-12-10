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
import { WEIGHTLIFT_EXERCISES } from "@/lib/data";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import { createPR } from "@/app/prs/actions";

export function WeightLiftForm() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Card variant="outline">
        <CardHeader pb={1}>
          <Heading size="md">Registro de PR</Heading>
          <Text fontSize="16px" color="gray">
            Seu registro de PR ajudará a celebrar suas realizações e a se
            desafiar a alcançar novos patamares.
          </Text>
        </CardHeader>
        <CardBody>
          <form action={createPR}>
            <Stack spacing="2">
              <FormControl>
                <FormLabel>Exercício</FormLabel>
                <Select name="exercise" placeholder="Escolha o exercício">
                  {WEIGHTLIFT_EXERCISES.map((exercise) => {
                    return (
                      <option value={exercise.name} key={exercise.name}>
                        {exercise.label}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Peso</FormLabel>

                <NumberInput defaultValue={0} min={0} max={1000}>
                  <NumberInputField name="weight" />
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
                  Save
                </Button>
                <Button>Cancel</Button>
              </ButtonGroup>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
