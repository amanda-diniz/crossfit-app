import { GymnasticForm } from "@/components/GymnasticForm";
import { ListGymnastic } from "@/components/ListGymnastic";
import { Container } from "@chakra-ui/react";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
  const data = await prisma.repetition.findMany({
    take: 3,
    orderBy: {
      repetition: "desc",
    },
  });
  return data;
}

export default async function Repetitions() {
  const logs = await getData();
  return (
    <>
      <Container pb={10} pt={10}>
        <GymnasticForm />
      </Container>
      <Container pb={10} pt={10}>
        <ListGymnastic logs={logs} />
      </Container>
    </>
  );
}
