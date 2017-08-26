// our packages
import { thinky, type, r } from './thinky';

// Create a model - the table is automatically created
export const User = thinky.createModel('User', {
  email: type.string().email().required(),
  login: type.string().required(),
  password: type.string().required(),
  registrationDate: type.date().default(r.now())
});

