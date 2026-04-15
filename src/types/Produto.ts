import Categoria from "./Categoria";
import Fornecedor from "./Fornecedor";

type Produto = {
    id?: string;
    barCode: string;
    sku: string;
    descricao: string;
    categoria: string | Categoria;
    fornecedor: string | Fornecedor;
    custoUn: number;
    vlrVendaUn: number;
    anuncio: string;
    medida: 'Un' | 'Kg' | 'Lt' | 'Mt';
    quantidade: number;
    photos?: string[]; //url das fotos do produto
    createdAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedAt: string; // padrão "dd/mm/aaaa HH:mm:ss"
    updatedBy: string; // uuid
    createdBy: string; // uuid
}

export default Produto;