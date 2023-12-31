import { GymnasticForm } from "@/components/GymnasticForm";
import { ListGymnastic } from "@/components/ListGymnastic";
import { Container } from "@chakra-ui/react";
import React from "react";
import prisma from '@/lib/db'

async function getData() {
  const data = await prisma.repetition.findMany({
    take: 3,
    orderBy: {
      repetition: "desc",
    },
  });
  return data;
}

export const revalidate = 0;

export default async function Repetitions() {
  const logs = await getData();
  return (
    <>
      <Container my={10}>
        <GymnasticForm />
      </Container>
      <Container>
        <ListGymnastic logs={logs} />
      </Container>
    </>
  );
}
