import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            reuired: true,
        },
        author: {
            type: String,
            reuired: true,
        },
        publishYear: {
            type: Number,
            reuired: true,
        },
    },
    {
        timestamps: true //this will add createdAt and updatedAt fields in our schema
    }
)
export const Book = mongoose.model('Book', bookSchema);