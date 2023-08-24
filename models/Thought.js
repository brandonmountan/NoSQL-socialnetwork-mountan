const { Schema, model } = require('mongoose')

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
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

thoughtSchema
      .virtual('reactionCount')
      .get(function() {
        return `${reactions.length}`;
      })

module.exports = thoughtSchema;