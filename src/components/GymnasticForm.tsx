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
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

export function GymnasticForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="2">
              <FormControl>
                <FormLabel>Exercício</FormLabel>
                <Select
                  placeholder="Escolha o exercício"
                  {...register("exercice")}
                >
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
                <Controller
                  name={"repetitions"}
                  control={control}
                  render={({ field: { ref, ...restField } }) => (
                    <NumberInput
                      {...restField}
                      defaultValue={0}
                      min={0}
                      max={1000}
                    >
                      <NumberInputField ref={ref} name={restField.name} />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  )}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Data</FormLabel>
                <Controller
                  control={control}
                  name="date-input"
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
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
