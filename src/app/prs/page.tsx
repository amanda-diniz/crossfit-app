import { WeightLiftForm } from "@/components/WeightLiftForm";
import { ListPr } from "@/components/ListPr";
import { Container } from "@chakra-ui/react";
import React from "react";
import prisma from '@/lib/client';

async function getData() {
  const data = await prisma.pR.findMany({
    take: 3,
    orderBy: {
      weight: "desc",
    },
  });
  return data;
}

export default async function Prs() {
  const logs = await getData();

  return (
    <>
      <Container my={10}>
        <WeightLiftForm />
      </Container>
      <Container>
        <ListPr logs={logs} />
      </Container>
    </>
  );
}
