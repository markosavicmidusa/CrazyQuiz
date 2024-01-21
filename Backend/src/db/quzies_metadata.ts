import mongoose from "mongoose";

const QuizMetadataSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true }
});

const QuizMetadata = mongoose.model('QuizMetadata', QuizMetadataSchema)

// Fetch all quizzes
export const getAllQuizzes = () => QuizMetadata.find();

