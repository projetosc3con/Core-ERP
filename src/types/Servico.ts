type Servico = {
    id?: string;
    nome: string;
    descricao: string;
    duracaoMedia: string; // hh:mm (quantitativo)
    diaSemana: string[]; // Segunda-feira, Terça-feira, etc...
    horarios: string[]; // hh:mm
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Servico;