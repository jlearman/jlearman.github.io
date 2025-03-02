import { asserts, elements, MusicXML } from '@stringsync/musicxml';

function show_score() {
    const musicXml = MusicXML.createPartwise();
    const root = musicXml.getRoot();
    console.log(root)
    // console.log(root.isScorePartwise(root)); // true
}

show_score();