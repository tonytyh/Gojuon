


import { addMetric } from '@/metrics/metric';
import GojuonCard from './GojuonCard';
import gojuonData from './GojuonData';
import { GridItem, SimpleGrid, Box } from "@chakra-ui/react"
import { useEffect } from 'react';

export default function GojuonBoard() {


    useEffect(() => {
        addMetric({'page':'GojuonBoard', action:'render'});
    }, []);
    return (
        <>
            <SimpleGrid columns={5} p={2} >
                {gojuonData.map((item, index) => (
                    <Box>
                        <GridItem key={index} p={1} >
                            <GojuonCard
                                id={index}
                                hira={item.hira}
                                kata={item.kata}
                                romaji={item.romaji}
                                hira_example_word={item.hira_example_word}
                                hira_example_word_pronunciation={item.hira_example_word_pronunciation}
                                hira_example_word_meaning_cn={item.hira_example_word_meaning_cn}
                                hira_example_word_meaning_en={item.hira_example_word_meaning_en}
                                kata_example_word={item.kata_example_word}
                                kata_example_word_pronunciation={item.kata_example_word_pronunciation}
                                kata_example_word_meaning_cn={item.kata_example_word_meaning_cn}
                                kata_example_word_meaning_en={item.kata_example_word_meaning_en}
                                category={item.category}
                            />
                        </GridItem>
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
}
