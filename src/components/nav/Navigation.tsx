import { Box, Button, HStack } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import { useOptionStore } from "../../GlobalContext";
import { useEffect } from "react";
import { addMetric } from "@/metrics/metric";

const FloatingNav = () => {
    const {
        showHira, showKata, showRomaji, showExampleWord,
        showSeion, showDakuon, showYouon: showYoon,
        clickHira, clickKata, clickRomaji, clickExampleWord,
        clickSeion, clickDakuon, clickYouon
    } = useOptionStore();

    const handleClick = (label: string) => {
        addMetric({ 'page': 'FloatingNav', action: 'click', label: label });
        if (label === "hira") clickHira();
        else if (label === "kata") clickKata();
        else if (label === "romaji") clickRomaji();
        else if (label === "word") clickExampleWord();
    };

    const handleCategoryClick = (category: string) => {
        addMetric({ 'page': 'FloatingNav', action: 'click', label: category });
        if (category === "Seion") clickSeion()
        else if (category === "Dakuon") clickDakuon();
        else if (category === "Youon") clickYouon();
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
                <Button className="navigation-bar-button" onClick={() => handleCategoryClick('Seion')}>
                    清音 {showSeion ? <FaCheck /> : <FaTimes />}
                </Button>
                <Button className="navigation-bar-button" onClick={() => handleCategoryClick('Dakuon')}>
                    浊音 {showDakuon ? <FaCheck /> : <FaTimes />}
                </Button>
                <Button className="navigation-bar-button" onClick={() => handleCategoryClick('Youon')}>
                    拗音 {showYoon ? <FaCheck /> : <FaTimes />}
                </Button>
            </HStack>
        </Box>
    );
};

export default FloatingNav;
