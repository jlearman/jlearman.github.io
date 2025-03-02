import { asserts, elements, MusicXML } from '@stringsync/musicxml';

function show_score() {
    const score = MusicXML.createPartwise();
    const root = score.getRoot();
    console.log(score.serialize())

    const note = new elements.Note
    const measure = new elements.MeasurePartwise({ attributes: { number: '1', implicit: 'no' } });
    const part = new elements.PartPartwise([measure])
    root.setParts([part])
    console.log(score.serialize()) // output same as above

}

show_score();