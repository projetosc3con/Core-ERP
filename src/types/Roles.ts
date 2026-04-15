type Roles = {
    id: string; // uuid
    name: string; // ex.: "Administrador", "Vendedor", "Cliente"
    permissions: string[]; // ex.: ["produto.read", "produto.write", "produto.update", "produto.delete"]
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Roles;