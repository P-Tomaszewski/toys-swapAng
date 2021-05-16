import {Advertisement} from "./advertisement";

export class User {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  lastName: string;
  city: string;
  adv: Advertisement[];
}
