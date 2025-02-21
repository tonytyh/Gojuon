import { Box, Button, VStack } from "@chakra-ui/react"
import "./GojuonTestBoard.css"
import { Heading } from "@chakra-ui/react"
import gojuonData from "./GojuonData"
import { useEffect, useState } from "react"
import GojuonCard from "./GojuonCard"
import { addMetric } from "../../metrics/metric"




export const GojuonTestBoard = () => {

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * gojuonData.length));
    const [randomItem, setRandomItem] = useState(gojuonData[randomIndex]);
    const generateRandomIndex = () => {
        setRandomIndex(Math.floor(Math.random() * gojuonData.length));
        addMetric({'page':'GojuonTestBoard', action:'generateRandomIndex'});
    }
    useEffect(() => {
        setRandomItem(gojuonData[randomIndex]);
        addMetric({'page':'GojuonTestBoard', action:'render'});
    }, [randomIndex]);

    return (
        <VStack>
            <Heading>
                五十音图随机测试
            </Heading>
            <Box className="center-box">
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
            </Box>
            <Box>
                <Button onClick={() => generateRandomIndex()}>下一个</Button>
            </Box>

        </VStack>
    )
}