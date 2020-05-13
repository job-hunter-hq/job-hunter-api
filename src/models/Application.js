import mongoose from 'mongoose'

export const Application = mongoose.model("Application", {
    name: String,
    contact: String,
    status: String,
    salary: Number,
    date_applied: Date
})
