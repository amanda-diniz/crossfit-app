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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

type Inputs = {
  exercise: string,
  weight: number,
  date: Date
};

export function WeightLiftForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="2">
              <FormControl>
                <FormLabel>Exercício</FormLabel>
                <Select
                  placeholder="Escolha o exercício"
                  {...register("exercise")}
                >
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
                <Controller
                  name={"weight"}
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
                  name="date"
                  render={({ field }) => (
                    <SingleDatepicker
                      name="date"
                      date={field.value}
                      onDateChange={(date) => field.onChange(date)}
                      configs={{
                        dateFormat: "dd/MM/yyyy",
                      }}
                    />
                  )}
                />
              </FormControl>
              <ButtonGroup spacing="2">
                <Button colorScheme="blue" type="submit">Save</Button>
                <Button>Cancel</Button>
              </ButtonGroup>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
