import Cliente from "./Cliente";

type Pet = {
    id?: string;
    nome: string;
    especie: string;
    raca: string;
    sexo: string;
    idade: number;
    peso: number;
    cor: string;
    comportamento?: string;
    alergias?: string;
    restricoes?: string;
    photo?: string;
    microchip?: string;
    idCliente: string | Cliente;
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Pet;