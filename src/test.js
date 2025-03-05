// example from https://github.com/stringsync/musicxml/issues/5

import { elements, MusicXML } from '@stringsync/musicxml';

const musicXML = MusicXML.createPartwise();

musicXML
  .getRoot()
  .setPartList(
    new elements.PartList({
      contents: [
        new Array(),
        new elements.ScorePart({
          attributes: { id: 'P1' },
          contents: [
            null, // elements.Identification
            new Array(),
            new elements.PartName({ contents: ['Part 1'] }),
            null, // elements.PartNameDisplay
            null, // elements.PartAbbreviation
            null, // elements.PartAbbreviationDisplay
            new Array(),
            new Array(),
            new Array(),
            new Array(),
          ],
        }),
        new Array(),
      ],
    })
  )
  .setParts([
    new elements.PartPartwise({
      attributes: { id: 'P1' },
    }).setMeasures([
      new elements.MeasurePartwise({
        attributes: { number: '1' },
        contents: [
          [
            new elements.Attributes({
              attributes: { divisions: 1 },
              contents: [
                null, // elements.Footnote
                null, // elements.Level
                null, // elements.Divisions
                new Array(),
                [
                  new elements.Time({
                    contents: [
                      [
                        [
                          [
                            new elements.Beats({
                              contents: ['4'],
                            }),
                            new elements.BeatType({
                              contents: ['4'],
                            }),
                          ],
                        ],
                        null,
                      ],
                    ],
                  })
                ],
                null, // elements.Staves
                null, // elements.PartSymbol
                null, // elements.Instruments
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
              ],
            }),
            new elements.Note({
              contents: [
                [
                  null, // elements.TiedNote
                  new elements.Pitch({
                    contents: [
                      new elements.Step({
                        contents: ['C'],
                      }),
                      null, // elements.Alter
                      new elements.Octave({
                        contents: [4],
                      }),
                    ],
                  }),
                  new elements.Duration({
                    contents: [4],
                  }),
                  [], // elements.Tie,
                ],
                new Array(),
                null, // elements.Footnote
                null, // elements.Level
                null, // elements.Voice
                null, // elements.Type
                new Array(),
                null, // elements.Accidental
                null, // elements.TimeModification
                null, // elements.Stem
                null, // elements.Notehead
                null, // elements.NoteheadText
                null, // elements.Staff
                [], // elements.Beam
                new Array(),
                new Array(),
                null, // elements.Play
                null, // elements.Listen
              ],
            }),
          ],
        ],
      }),
    ]),
  ]);

console.log(musicXML.serialize());
