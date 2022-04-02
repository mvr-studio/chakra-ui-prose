import * as React from "react";
import { chakra, HTMLChakraProps, useStyleConfig } from "@chakra-ui/system";

export interface ProseProps extends HTMLChakraProps<"div"> {}

export function Prose(props: ProseProps) {
  const { as = "article", ...rest } = props;
  const styles = useStyleConfig("Prose", { ...props });

  return <chakra.div as={as} __css={{ ...styles }} {...rest} />;
}
