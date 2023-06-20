import { useEffect, useRef, useState } from 'react';

export default function MatrixText({
    text,
    offSet = 0,
}: {
    text: string;
    offSet?: number;
}) {
    const spans = text
        .split('')
        .map((char, index) => (
            <ScramblingCharacter key={index} char={char} offSet={offSet} />
        ));

    return <div className="matrix-text">{spans}</div>;
}

function ScramblingCharacter({
    char,
    offSet = 0,
}: {
    char: string;
    offSet: number;
}) {
    const [currChar, setCurrChar] = useState(randomChar());
    const [i, setI] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const maxScrambles = getRandomInt(0) + 20 + 50 * offSet;
    const scrambleRate = getRandomInt(50) + 50;

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrChar(randomChar());
            setI((prev) => prev + 1);
        }, scrambleRate);

        if (i > maxScrambles) {
            clearInterval(intervalRef.current);
            setCurrChar(char);
        }

        return () => {
            if (!intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [char, i, maxScrambles, scrambleRate]);

    if (char === ' ') return <span>{char}</span>;

    return <span>{currChar}</span>;
}

function randomChar() {
    const index = getRandomInt(charSet.length);

    return charSet[index];
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const charSet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    ...'~!@#$%^&*()-+_=<>?[]{}'.split(''),
];
