import { thinky, type, r } from './thinky';

// Create a model - the table is automatically created
export const Question = thinky.createModel('Question', {
  text: type.string().required(),
  answers: type.array().schema(
    type.object().schema({
    user: type.string().required(),
    value: type.string().required()
    })
  ),
  creationDate: type.date().required().default(r.now()),
  expirationDate: type.date().required()
});
