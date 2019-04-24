import { createContext } from "react";

// On créée un context des données que l'on souhaite partager
export const RepositoryContext = createContext({
  repository: {},
  setRepository: () => {}
});
