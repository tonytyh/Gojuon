
import jsonData from './gojuon_data.json';

export interface GojuonCardModel {
    id: number;
    hira: string;
    kata: string;
    romaji: string;
    hira_example_word: string;
    hira_example_word_pronunciation: string;
    hira_example_word_meaning_cn: string;
    hira_example_word_meaning_en: string;
    kata_example_word: string;
    kata_example_word_pronunciation: string;
    kata_example_word_meaning_cn: string;
    kata_example_word_meaning_en: string;
    category: 'Seion' | 'Dakuon' | 'Youon';
}

const gojuonData: GojuonCardModel[] = [];
for (let i = 0; i < jsonData.length; i++) {
    const obj = jsonData[i];
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
        kata_example_word_meaning_en: obj.kata_example_word_meaning_en,
        category: obj.category as 'Seion' | 'Dakuon' | 'Youon'

    });

}

export default gojuonData;

