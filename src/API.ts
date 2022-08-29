import { shuffleArray } from "./Utils";

export type TQuestion = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type TQuestionState = TQuestion & { answers: string[]}


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

    const data = await (await (await fetch(endpoint))).json();
    return data.results.map((question: TQuestion) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])

        }
    ))
    }
