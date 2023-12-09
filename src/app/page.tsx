import { WeightLiftForm } from "@/components/WeightLiftForm";
import { GymnasticForm } from "@/components/GymnasticForm";
import { Cards } from "@/components/Cards";

import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Cards />
      <Container>
        <GymnasticForm />
      </Container>
    </div>
  );
}
