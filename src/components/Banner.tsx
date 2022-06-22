import { Flex, ImageProps, Image } from "@chakra-ui/react";

interface BannerProps extends ImageProps {
  src: string;
  alt: string;
}

export const Banner = ({ src, alt, width, height, ...rest }: BannerProps) => {
  return (
    <Flex w="100%">
      <Image src={src} alt={alt} width="100%" height="auto" {...rest} />
    </Flex>
  );
};
