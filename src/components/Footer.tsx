import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-100 border-t border-slate-200/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="font-headline font-bold text-slate-900 text-2xl">PetSanctuary</span>
          <p className="text-xs text-slate-500 max-w-xs">
            Curadoria premium de produtos e serviços para o seu pet. Qualidade e amor em cada entrega.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="#" className="text-xs text-slate-500 hover:text-orange-500 underline underline-offset-4 opacity-80 hover:opacity-100 transition-all">Privacidade</Link>
          <Link to="#" className="text-xs text-slate-500 hover:text-orange-500 underline underline-offset-4 opacity-80 hover:opacity-100 transition-all">Termos</Link>
          <Link to="#" className="text-xs text-slate-500 hover:text-orange-500 underline underline-offset-4 opacity-80 hover:opacity-100 transition-all">Trabalhe Conosco</Link>
          <Link to="#" className="text-xs text-slate-500 hover:text-orange-500 underline underline-offset-4 opacity-80 hover:opacity-100 transition-all">FAQ</Link>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">© 2024 PetSanctuary Digital Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
