type Fornecedor = {
    id?: string; // uuid
    cnpj: string; // padrão "00.000.000/0000-00"
    razaoSocial: string; // ex.: "Empresa Exemplo Ltda"
    nomeFantasia: string; // ex.: "Empresa Exemplo"
    telefone: string; // ex.: "(11) 99999-9999"
    emailContato: string; // ex.: [EMAIL_ADDRESS]"
    endereco: string; // ex.: "Rua Exemplo, 123 - Centro - Cidade - Estado - CEP"
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Fornecedor;