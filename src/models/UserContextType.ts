import { User } from "./User";

export type UserContextType = {
  currentUser: User | null;
  userModifier: (user: User | null) => void;
};
