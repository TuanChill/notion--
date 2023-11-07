import { Timestamp, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";



export interface IUser {
    uid?: string
    fullname: string
    email: string
    photoURL: string
    address: string
    searchID?: string
    dateOfBirth: Timestamp
    createdAt?: Timestamp
}

export const getUser = async (uid: string): Promise<IUser | null> => {
    const user = await getDoc(doc(db, "users", uid))
  
    if (user.exists()) {
      return user.data() as IUser
    } else {
      return null
    }
};