import { getUsers } from "../utils/api";
import { setUsers } from "./users";

export function handleInitialData () {
  return (dispatch) => getUsers().then(users =>  dispatch(setUsers(users)))
}
