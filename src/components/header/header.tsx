
import { Heading, Center, Box, Link } from "@chakra-ui/react"
import "./header.css";
import { useModeStore } from "@/GlobalContext";


export const Header = () => {


    const {
        setMode
    } = useModeStore();

    const handleClick = (mode: "gojuon" | "test") => {
        setMode(mode);
    }

    return (
        <Box className="header-box">
            <Center>
                <Heading className="header-title">五十音图</Heading>
                <Link className="header-navigation" onClick={() => handleClick('gojuon')}>五十音图</Link>
                <Link className="header-navigation" onClick={() => handleClick('test')}>快速记忆</Link>
            </Center>
        </Box>
    );
}