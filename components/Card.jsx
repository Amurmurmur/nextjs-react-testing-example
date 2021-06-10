import React from "react";
import {
    Box,
    Flex,
    AspectRatio,
    Image,
    Text,
    Link,
    Button,
    Stack
} from "@chakra-ui/react";

import PropTypes from 'prop-types';

const Card = (props) => {
    const { title, caption, description, onButtonClick } = props;

    return (
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
        >
            <AspectRatio ratio={1 / 1}>
                <Image
                    maxWidth="200px"
                    margin="auto"
                    src="https://picsum.photos/id/237/250/250"
                    alt="Woman paying for a purchase"
                />
            </AspectRatio>
            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {title}
                </Text>
                <Link
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {caption}
                </Link>
                <Text my={2} color="gray.500">
                    {description}
                </Text>
                {
                    typeof (onButtonClick) === 'function' && (
                        <Button onClick={onButtonClick} maxWidth="100px" my={2}>
                            Open a todo
                        </Button>
                    )
                }

            </Stack>
        </Box>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    description: PropTypes.string,
    onButtonClick: PropTypes.func
};

export default Card;
