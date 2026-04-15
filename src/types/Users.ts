import Roles from "./Roles";

type User = {
    uid: string;
    email: string | null;
    displayName: string | null;
    role: null | Roles;
    photoURL: string | null;
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default User;