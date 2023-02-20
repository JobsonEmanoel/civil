import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button
    
  } from "@chakra-ui/react";
import styles from "./pesquisa.css"
  
  function Pesquisa() {
    return (
    <Box className={styles.box}>
        <Flex className={styles.box}
        >
          <Center className={styles.center}
          >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input id="email" type="email" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                  <Input id="nasc" type="date" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                  <Input id="natural" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input id="cel" type="number" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="Tefone">Telefone</FormLabel>
                  <Input id="Tefone" type="number" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Endereço</FormLabel>
                  <Input id="endereco" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="cidade">Cidade</FormLabel>
                  <Input id="cidade" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel>Sexo</FormLabel>
                  <RadioGroup defaultValue="Masculino">
                    <HStack spacing="24px">
                      <Radio value="Masculino">Masculino</Radio>
                      <Radio value="Feminino">Feminino</Radio>
                      <Radio value="Outro">Outro</Radio>
                      
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel>Motivo</FormLabel>
                  <RadioGroup defaultValue="BO">
                    <HStack spacing="24px">
                      <Radio value="Roubo">Roubo</Radio>
                      <Radio value="Furto">Furto</Radio>
                      <Radio value="Outro">Outro</Radio>
                      
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    );
  }
  
  export default Pesquisa;