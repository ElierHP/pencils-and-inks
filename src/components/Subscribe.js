import React from "react";
import { FaMailBulk } from "react-icons/fa";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Subscribe() {
  return (
    <Section>
      <FaMailBulk size={80} />
      <h2>Let's Keep In Touch!</h2>
      <p>
        Subscribe to receive special offers, giveaways, and exclusive deals.
      </p>
      <Button>Subscribe</Button>
    </Section>
  );
}
