"use client";
import {
  Heading,
  Card,
  CardHeader,
  Text,
  CardBody,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

export function ListGymnastic({ logs }) {
  return (
    <>
      <Card variant="outline">
        <CardHeader pb={1}>
          <Heading size="md">Registros de repetições</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {logs.map((log, index) => (
              <Box key={index}>
                <Heading size="xs" textTransform="uppercase">
                  {log.exercise}
                </Heading>
                <Text pt="2" fontSize="sm">
                  Repetições: {log.repetition}
                </Text>
                <Text pt="2" fontSize="sm">
                  Data: {log.date.toLocaleDateString('pt-BR')}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

