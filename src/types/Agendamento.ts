import Cliente from "./Cliente";
import Pet from "./Pet";
import Servico from "./Servico";

type Agendamento = {
    id?: string;
    cliente: string | Cliente;
    pet: string | Pet;
    clientePhoto?: string;
    petPhoto?: string;
    horario: string;
    servico: string | Servico;
    dia: string;
    status: string;
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Agendamento;