import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import {langVers} from "../var.js";
const languages = Object.entries(langVers);

const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Язык программирования:
            </Text>
            <Menu isLazy>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList bg="#ffffff">
                    {languages.map(([lang]) => (
                        <MenuItem
                            key={lang}
                            color={lang === language ? 'black' : ""}
                            bg={lang === language ? "gray.500" : "transparent"}
                            _hover={{
                                color: 'blue.400',
                                bg: "gray.500",
                            }}
                            onClick={() => onSelect(lang)}
                        >
                            {lang}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};
export default LanguageSelector;
