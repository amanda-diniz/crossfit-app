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
import type { PR } from "@prisma/client";

export function ListPr({ logs }: { logs: Array<PR> }) {
  return (
    <>
      <Card variant="outline">
        <CardHeader pb={1}>
          <Heading size="md">Registros de PR</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {logs && logs.map((log, index) => (
              <Box key={index} data-testid="log-box">
                <Heading size="xs" textTransform="uppercase">
                  {log.exercise}
                </Heading>
                <Text pt="2" fontSize="sm">
                  Peso: {log.weight}
                </Text>
                <Text pt="2" fontSize="sm">
                  Data: {log.date.toLocaleDateString("pt-BR")}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
