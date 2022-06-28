import { Flex, Image } from "@chakra-ui/react";

interface HeaderProps {
  showBackIcon: boolean;
}

export function Header({ showBackIcon }: HeaderProps) {
  return (
    <>
      <Flex w="100" bg="#fff" p="6" alignItems="center" justify="center">
        {showBackIcon && (
          <Image src="assets/images/backButton.svg" alt="Back button" />
        )}
        <Image src="assets/images/logo.svg" alt="Logo" />
      </Flex>
    </>
  );
}
