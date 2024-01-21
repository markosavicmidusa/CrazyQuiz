import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    value: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    required: { type: Boolean, required: true }
});

const ResultsSchema = new mongoose.Schema({
    range: {
        from: { type: Number, required: true },
        to: { type: Number, required: true }
    },
    result: { type: String, required: true }
});

const QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answers: { type: [AnswerSchema], required: true },
    results: { type: [ResultsSchema], required: true }
})


const QuizSchema = new mongoose.Schema({
    category: { type: String, required: true },
    questions: { type: [QuestionSchema], required: true }
});

const Quiz = mongoose.model('Quiz',QuizSchema)

// * Fetch quiz by ID
export const getQuizById = (quizId: string) => Quiz.findById(quizId);
