import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  src: string;
  alt: string;
  title: string;
}

export function TravelTypes({ src, alt, title }: TravelTypesProps) {
  return (
    <GridItem w="100%" h="100%">
      <Flex align="center" flexDirection="column">
        <Image src={src} alt={alt} />
        <Text fontSize="24px" fontWeight="600" pt="2">{title}</Text>
      </Flex>
    </GridItem>
  );
}
