

import { GojuonCardModel } from './GojuonModel';
import { Box, Card, Center } from "@chakra-ui/react"
import './GojuonCard.css';
import { useOptionStore, OptionStore } from '../../GlobalContext';



export default function GojuonCard(model: GojuonCardModel) {

    const {
        showHira,
        showKata,
        showRomaji,
        showExampleWord,
        showExampleWordPronunciation,
        showExampleWordMeaning

    } = useOptionStore() as OptionStore;

    return (
        <Card.Root className='gojuon-card'>
            <Box padding={5}>
                <Card.Header>
                    <Center>
                        {showHira && showKata && <Card.Title className='gojuon-card-title'>{model.hira}  {model.kata}</Card.Title>}
                        {showHira && !showKata && <Card.Title className='gojuon-card-title'>{model.hira}</Card.Title>}
                        {!showHira && showKata && <Card.Title className='gojuon-card-title'>{model.kata}</Card.Title>}
                    </Center>
                    <Center>
                        {showRomaji && <Card.Description>{model.romaji}</Card.Description>}
                    </Center>

                </Card.Header>
            </Box>

            <Card.Body className='gojuon-card-body'>
                <div>
                    {showExampleWord && <h3>平假名单词: <span> {model.hira_example_word}</span></h3>}
                    {showExampleWord && showExampleWordPronunciation && <p>读音: <span>{model.hira_example_word_pronunciation}</span></p>}
                    {showExampleWord && showExampleWordMeaning && <p>意思: {model.hira_example_word_meaning_cn}</p>}
                </div>
                <br />
                <div>
                    {showExampleWord && <h3>片假名单词: <span>{model.kata_example_word}</span></h3>}
                    {showExampleWord && showExampleWordPronunciation && <p>读音: <span>{model.kata_example_word_pronunciation}</span></p>}
                    {showExampleWord && showExampleWordMeaning && <p>意思: {model.kata_example_word_meaning_cn}</p>}
                </div>
                <br />
            </Card.Body>

        </Card.Root>
    );
}