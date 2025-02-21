import { Box, Button, HStack } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import { useOptionStore } from "../../GlobalContext";
import { useEffect } from "react";
import { addMetric } from "@/metrics/metric";

const FloatingNav = () => {
    const {
        showHira, showKata, showRomaji, showExampleWord,
        clickHira, clickKata, clickRomaji, clickExampleWord
    } = useOptionStore();

    const handleClick = (label: string) => {
        addMetric({ 'page': 'FloatingNav', action: 'click', label: label });
        if (label === "hira") clickHira();
        else if (label === "kata") clickKata();
        else if (label === "romaji") clickRomaji();
        else if (label === "word") clickExampleWord();
    };

    useEffect(() => {
        const payload = {
            'page': 'FloatingNav', action: 'render', displayOptions: {
                showHira: showHira,
                showKata: showKata,
                showRomaji: showRomaji,
                showExampleWord: showExampleWord
            }
        }
        addMetric(payload);
    }, [showHira, showKata, showRomaji, showExampleWord]);

    return (
        <Box className="navigation-bar">
            <HStack>
                <Button className="navigation-bar-button" onClick={() => handleClick('hira')}>
                    平假名 {showHira ? <FaCheck /> : <FaTimes />}
                </Button>
                <Button className="navigation-bar-button" onClick={() => handleClick('kata')}>
                    片假名 {showKata ? <FaCheck /> : <FaTimes />}
                </Button>
                <Button className="navigation-bar-button" onClick={() => handleClick('romaji')}>
                    罗马音 {showRomaji ? <FaCheck /> : <FaTimes />}
                </Button>
                <Button className="navigation-bar-button" onClick={() => handleClick('word')}>
                    单词 {showExampleWord ? <FaCheck /> : <FaTimes />}
                </Button>
            </HStack>
        </Box>
    );
};

export default FloatingNav;
