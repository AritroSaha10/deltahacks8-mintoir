import React from 'react'
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
    Button,
    Icon,
} from "native-base"
import { MaterialIcons } from '@expo/vector-icons';

const HomeCard = (props) => {
    return (
        <Box
            maxW="80"
            rounded="30px"
            overflow="hidden"
            borderColor="#010024"
            borderWidth="1"
            backgroundColor= "#010024"
        >
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image alt="ok" source={props.imageUri}/>
                </AspectRatio>
                <HStack justifyContent='space-between' alignItems='center'>
                    <Stack p= "4" space={2}>
                        <Heading color="white" size = "md" fontFamily="Philosopher-Bold">{props.title}</Heading>
                        <Text color="white" fontFamily="Philosopher-Normal">{props.id}</Text>
                    </Stack>
                    <Button
                        variant="subtle" colorScheme="secondary" leftIcon={<Icon as={MaterialIcons} color="red" name="favorite" size="sm" />}
                    >
                        {props.likes}
                    </Button>
                </HStack>
            </Box>

        </Box>
    )
}
export default HomeCard