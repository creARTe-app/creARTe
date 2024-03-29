import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: [{
        comment: {
            type: String       
         }
        }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
    status: { type: String, default: "green"},
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;