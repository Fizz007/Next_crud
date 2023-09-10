import mongoose from "mongoose";

const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    title: {
      type: String,
      uppercase: true
    },
    description: {
      type: String,
    },

  },
  { timestamps: true ,
    versionKey:false,}, 
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;