import Categoria from "./Categoria";
import Servico from "./Servico";

export type ProdutoMarketLanding = {
    id: string;
    vlrVendaUn: number;
    photo: string;
    categoria: string;
    descricao: string;
}

type MarketLanding = {
    pageTitle: string;
    banners: string[] | null; // url de download das imagens do banner
    destaques: ProdutoMarketLanding[];
    servicos?: Servico[];
    categorias?: Categoria[];
    tempoBanner: number;
    tempoDestaque: number;
}

export type AboutUs = {
    titleSize: string; // 1rem, 12px, etc...
    contentSize: string; // 1rem, 12px, etc...
    itens: { index: number; title: string; content: string }[];
}

export type Contact = {
    email: string;
    telefone: string;
    cep: string;
    numero: string;
    horario: string;
    instagram: string;
    facebook: string;
}

export default MarketLanding;