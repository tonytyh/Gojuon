import { Box, Button, VStack } from "@chakra-ui/react"
import "./GojuonTestBoard.css"
import { Heading } from "@chakra-ui/react"
import gojuonData from "./GojuonData"
import { useEffect, useState } from "react"
import GojuonCard from "./GojuonCard"
import { useOptionStore } from "../../GlobalContext"




export const GojuonTestBoard = () => {

    const {
        showSeion, showDakuon, showYouon,
    } = useOptionStore();
    const filteredData = gojuonData.filter(item => {
        if (showSeion && item.category === "Seion") return true;
        if (showDakuon && item.category === "Dakuon") return true;
        if (showYouon && item.category === "Youon") return true;
        return false;
    });

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * filteredData.length));
    const [randomItem, setRandomItem] = useState(filteredData[randomIndex]);
    const generateRandomIndex = () => {
        setRandomIndex(Math.floor(Math.random() * filteredData.length));
    }
    useEffect(() => {
        setRandomItem(filteredData[randomIndex]);
    }, [randomIndex]);

    return (
        <VStack>
            <Heading>
                五十音图随机测试
            </Heading>
            <Box className="center-box">
                {randomItem &&
                    <GojuonCard
                        id={0}
                        hira={randomItem.hira}
                        kata={randomItem.kata}
                        romaji={randomItem.romaji}
                        hira_example_word={randomItem.hira_example_word}
                        hira_example_word_pronunciation={randomItem.hira_example_word_pronunciation}
                        hira_example_word_meaning_cn={randomItem.hira_example_word_meaning_cn}
                        hira_example_word_meaning_en={randomItem.hira_example_word_meaning_en}
                        kata_example_word={randomItem.kata_example_word}
                        kata_example_word_pronunciation={randomItem.kata_example_word_pronunciation}
                        kata_example_word_meaning_cn={randomItem.kata_example_word_meaning_cn}
                        kata_example_word_meaning_en={randomItem.kata_example_word_meaning_en}
                        category={randomItem.category}
                    />
                }

            </Box>
            <Box>
                <Button onClick={() => generateRandomIndex()}>下一个</Button>
            </Box>

        </VStack>
    )
}