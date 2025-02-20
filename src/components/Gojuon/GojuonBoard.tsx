


import GoJuonData from './gojuon_data.json';
import GojuonCard from './GojuonCard';
import { GojuonCardModel } from './GojuonModel';
import { GridItem, SimpleGrid, Box } from "@chakra-ui/react"

export default function GojuonBoard() {

    const gojuonData: GojuonCardModel[] = [];
    for (let i = 0; i < GoJuonData.length; i++) {
        const obj = GoJuonData[i];
        gojuonData.push({
            id: i,
            hira: obj.hira,
            kata: obj.kata,
            romaji: obj.romaji,
            hira_example_word: obj.hira_example_word,
            hira_example_word_pronunciation: obj.hira_example_word_pronunciation,
            hira_example_word_meaning_cn: obj.hira_example_word_meaning_cn,
            hira_example_word_meaning_en: obj.hira_example_word_meaning_en,
            kata_example_word: obj.kata_example_word,
            kata_example_word_pronunciation: obj.kata_example_word_pronunciation,
            kata_example_word_meaning_cn: obj.kata_example_word_meaning_cn,
            kata_example_word_meaning_en: obj.kata_example_word_meaning_en
        });

    }

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
                            />
                        </GridItem>
                    </Box>

                ))}
            </SimpleGrid>
        </>
    );
}
