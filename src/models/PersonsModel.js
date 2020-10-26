import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    lactose: {
        type: Boolean,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    athlete: {
        type: Boolean,
        required: false
    }
});

export default mongoose.model("Persons", personSchema)

