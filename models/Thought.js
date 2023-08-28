const { Schema, model } = require("mongoose");
// const reactionSchema = require("./Reaction");
const User = require('./User')


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types.String,
      ref: User,
      required: true,
    },
    reactions: {
      type: Schema.Types.ObjectId,
      ref: 'Reaction'
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// thoughtSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;
