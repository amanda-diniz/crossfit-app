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
import { WEIGHTLIFT_EXERCISES } from "@/lib/data";

export function WeightLiftForm() {
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
          <Stack spacing="2">
            <FormControl>
              <FormLabel>Exercício</FormLabel>
              <Select placeholder="Escolha o exercício">
                {" "}
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
            <ButtonGroup spacing="2">
              <Button colorScheme="blue">Save</Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
