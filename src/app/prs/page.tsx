import { WeightLiftForm } from "@/components/WeightLiftForm";
import { ListPr } from "@/components/ListPr";
import { Container } from "@chakra-ui/react";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
      <Container pb={10} pt={10}>
        <WeightLiftForm />
      </Container>
      <Container pb={10} pt={10}>
        <ListPr logs={logs} />
      </Container>
    </>
  );
}
