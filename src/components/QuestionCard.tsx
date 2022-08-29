import React, {FC} from 'react';
import { TAnswerObject } from '../App';
import '../css/questionCard.css'

type TCard = { 
    question: string;
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: TAnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: FC<TCard> = (props) => {
    const {question, answers, callback, questionNumber, totalQuestions, userAnswer} = props;


    return ( 
            <div className='QCard'>
                <p className='number'>
                    Question: {questionNumber} / {totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{__html: question}}></p>  
                <div className='answers'>
                    {answers.map((answer) => (
                        <div key={answer}>
                            <button disabled={userAnswer ? true : false} value = {answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    )

};

export default QuestionCard;