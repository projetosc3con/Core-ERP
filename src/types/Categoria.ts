type Categoria = {
    id?: string;
    nome: string;
    descricao: string;
    icone: string;
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Categoria;