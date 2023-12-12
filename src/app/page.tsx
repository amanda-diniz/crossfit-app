import { Cards } from "@/components/Cards";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Container pb={10} pt={10} maxW='container.lg' >
        <Cards />
      </Container>
    </div>
  );
}
