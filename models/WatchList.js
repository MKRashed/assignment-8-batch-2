import { model, models, Schema } from 'mongoose'

const schema = new Schema({
  user_id: {
    required: true,
    type: String,
  },
  movie_id: {
    required: true,
    type: String,
  },
})

export const UserModel = models.watch_lists || model('watch_lists', schema)