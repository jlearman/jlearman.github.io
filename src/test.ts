const musicXml = MusicXML.createPartwise();

musicXml
.getRoot()
.setPartList(
    new elements.PartList({
    contents: [
        new Array<elements.PartGroup>(),
        new elements.ScorePart({
        attributes: { id: 'P1' },
        contents: [
            null, // elements.Identification
            new Array<elements.PartLink>(),
            new elements.PartName({ contents: ['Part 1'] }),
            null, // elements.PartNameDisplay
            null, // elements.PartAbbreviation
            null, // elements.PartAbbreviationDisplay
            new Array<elements.Group>(),
            new Array<elements.ScoreInstrument>(),
            new Array<elements.Player>(),
            new Array<elements.MidiDevice | elements.MidiInstrument>(),
        ],
        }),
        new Array<elements.PartGroup | elements.ScorePart>(),
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
                new Array<elements.Key>(),
                new Array<elements.Time>(
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
                ),
                null, // elements.Staves
                null, // elements.PartSymbol
                null, // elements.Instruments
                new Array<elements.Clef>(),
                new Array<elements.StaffDetails>(),
                new Array<elements.Transpose>(),
                new Array<elements.Directive>(),
                new Array<elements.MeasureStyle>(),
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
                new Array<elements.Instrument>(),
                null, // elements.Footnote
                null, // elements.Level
                null, // elements.Voice
                null, // elements.Type
                new Array<elements.Dot>(),
                null, // elements.Accidental
                null, // elements.TimeModification
                null, // elements.Stem
                null, // elements.Notehead
                null, // elements.NoteheadText
                null, // elements.Staff
                [], // elements.Beam
                new Array<elements.Notations>(),
                new Array<elements.Lyric>(),
                null, // elements.Play
                null, // elements.Listen
            ],
            }),
        ],
        ],
    }),
    ]),
]);

console.log(nusicxml.serialize());