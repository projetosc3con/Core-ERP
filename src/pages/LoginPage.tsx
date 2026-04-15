import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="bg-background font-body text-on-background min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 filter grayscale brightness-50"
          alt="modern living room with golden retriever"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKlxFCMhGr0HvodFV3AuDuFP4zrKxiF6vWmfNfEHfLGImknVn9jo_Pne0PQbXqVBrTYFJlGNsy60nv74qiJ8iXOCBDT-4S1PiVZ9kjNKLL1M813tvnPINJfaxRdhaGbVsLJBaV_C4FQ5WfVKI2AiPUVcoplY2ABsmP__ViblkVDXCh0EYn7v34A_uDOUNGFDoqZNaqiAOuESfacRNGD6_zMTzAups-xa94FcS5jdMF4WR93FBXE35jBw--cceRT6d_lP6pN_mdCuO"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-on-surface/40 to-transparent" />
      </div>

      {/* Login Container */}
      <main className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl bg-surface-container-lowest">
        {/* Left Side: Branding */}
        <section className="hidden md:flex flex-col justify-between p-12 bg-on-surface text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <span className="material-symbols-outlined text-primary-container text-4xl">pets</span>
              <h1 className="font-headline font-extrabold text-2xl tracking-tight">PetSanctuary</h1>
            </div>
            <h2 className="font-headline text-4xl font-bold leading-tight mb-6">
              A casa digital do seu <br />
              <span className="text-primary-container">melhor amigo.</span>
            </h2>
            <p className="text-secondary-fixed-dim text-lg max-w-md">
              Gerencie a saúde, agende serviços premium e encontre os melhores produtos em um só lugar.
            </p>
          </div>
          <div className="relative z-10 mt-auto">
            <div className="flex -space-x-4 mb-4">
              <img className="w-12 h-12 rounded-full border-4 border-on-surface object-cover" alt="pet 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbPaalNIpizJ7AqbSIjSKmyFHqvZ2AUXLSospxsGis13_9D1AFV9vfV4vC1wwQv8Q2z9PqG8YD2kH-6eEAfdDkLTG2owgSzuF_q57MGCwQzHXDKKIGryf2dv3PjJenhzbhKGBWsNM6X76zpZh3WMBmMkO-NtwMnKFP597VYEN2ejwQ1KKo0sWuG1e_ABBHgWLTqsBRAoj2wyWC7_CpbwLElQ4XJ47TEamFdWsfyK35Qkyz2BQltxIU_5f9qNfEspD4FtAgo-K2uBMr" />
              <img className="w-12 h-12 rounded-full border-4 border-on-surface object-cover" alt="pet 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ktzAAp2384N1oXNjqDb4h9XbtY968r01FJHxcoprNIWNmGZw1jbPno1Rt0sF10zyR_BGUii1SmNXnBWv05mdoQH3MCytwrnsZGUFfEdfuNJUr-fHF8jGyyX-Jx3nlndzOUmlFusmIDwJdhwFUFbRGBnmtPX3x9KjHGuHpGHZBLnElvUDFJwJdgCMxuvpN-mN8_ov02lqDhN5s3xtD-uZQDNUHSQR3LxESF57P5EBnS18tjvYqGtH9JKXKYRw73OZGVT0Ro0Io8JZ" />
              <img className="w-12 h-12 rounded-full border-4 border-on-surface object-cover" alt="pet 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG9Y9K8yTI6bvTmktZKF2xv2V-vP-57j7G-IhSqvQe4q_RuMS9zj5munYEBvLgBRpDGEfqPLwF9TKZ7IwhNg1ubcaLCcMiu3cW_bCoosS-m1F1GOE4FfNKDgJRMBskSBttq6D3JQk7cGrVFGcd9Ku5pP_H3BhBhZqrZRHxpV2wuvaWpVTePJJMnnW51UUKC0XKlHH-1zj9s_kq_AJF8u-2aPIiVl9buI9-A4eiW-Q9_URH72D3g9iJYxc6v9g4-X6Kqr-utuXLPocB" />
              <div className="w-12 h-12 rounded-full border-4 border-on-surface bg-secondary flex items-center justify-center text-xs font-bold">+2k</div>
            </div>
            <p className="text-sm text-secondary-fixed-dim font-medium">Junte-se a milhares de tutores apaixonados.</p>
          </div>
          <img
            className="absolute bottom-0 right-0 w-2/3 h-2/3 object-contain opacity-30 pointer-events-none translate-x-1/4 translate-y-1/4"
            alt="happy puppy"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY4Wtx2tJ1MY2S0CBtn0xF5PwMO2lahus6zy-ZEP9tN1m4PmR1QTdDb3D6S9pPHCcLPnNwmmMVatORnxX8Y40SA2uVELyg82fILfzYl8_DOoOr7oliHxH3BJehJ-SRbFLGAg1ElQseUzI6KRSJvysXg854voM4Qco1lnlHGZV6tOrQ5W2a_gQIsl4mTTgcg46DiiXsbklyzZeVd_mFQgMZPsr_heZ4EvDSEj7aj-QE6wY_zT1IixvfLKkcGWxli84Vb4EmW48qxxsi"
          />
        </section>

        {/* Right Side: Login Form */}
        <section className="p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
          <div className="max-w-md mx-auto w-full">
            <div className="md:hidden flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-primary-container text-3xl">pets</span>
              <span className="font-headline font-bold text-xl text-on-surface">PetSanctuary</span>
            </div>

            <div className="mb-10">
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Bem-vindo de volta</h3>
              <p className="text-secondary font-medium">Acesse sua conta para cuidar do seu pet.</p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container transition-all duration-300 active:scale-95 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 5.04c1.94 0 3.51.68 4.75 1.83l3.48-3.48C18.21 1.5 15.42 0 12 0 7.31 0 3.25 2.67 1.24 6.57l4.13 3.21c.98-2.92 3.73-4.74 6.63-4.74z" fill="#EA4335" />
                  <path d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.86 3c2.26-2.09 3.56-5.17 3.56-8.82z" fill="#4285F4" />
                  <path d="M5.37 14.22c-.24-.72-.37-1.49-.37-2.22s.13-1.5.37-2.22L1.24 6.57C.45 8.11 0 9.91 0 12c0 2.09.45 3.89 1.24 5.43l4.13-3.21z" fill="#FBBC05" />
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.11 0-5.74-2.11-6.68-4.95l-4.13 3.21C3.25 21.33 7.31 24 12 24z" fill="#34A853" />
                </svg>
                <span className="text-sm font-semibold text-on-surface">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container transition-all duration-300 active:scale-95 group">
                <svg className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-semibold text-on-surface">Facebook</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-8">
              <div className="flex-grow border-t border-outline-variant/20" />
              <span className="px-4 text-xs font-bold text-outline uppercase tracking-widest bg-surface-container-lowest">
                Ou entre com e-mail
              </span>
              <div className="flex-grow border-t border-outline-variant/20" />
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2 px-1" htmlFor="email">E-mail</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-0 rounded-xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                    id="email"
                    placeholder="nome@exemplo.com"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2 px-1">
                  <label className="block text-sm font-bold text-on-surface" htmlFor="password">Senha</label>
                  <a className="text-xs font-bold text-primary hover:text-surface-tint transition-colors" href="#">Esqueceu a senha?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-3.5 bg-surface-container-low border-0 rounded-xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary border-2 bg-transparent transition-all" id="remember" type="checkbox" />
                <label className="text-sm font-medium text-secondary cursor-pointer" htmlFor="remember">Lembrar de mim por 30 dias</label>
              </div>

              <Link
                to="/admin"
                className="block w-full text-center bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-container/20 hover:shadow-xl hover:shadow-primary-container/30 transform hover:-translate-y-0.5 transition-all active:scale-95 mt-2"
              >
                Acessar Minha Conta
              </Link>
            </form>

            <p className="mt-10 text-center text-secondary font-medium">
              Novo no PetSanctuary?{' '}
              <a className="text-primary font-bold hover:underline underline-offset-4" href="#">Crie sua conta agora</a>
            </p>
          </div>
        </section>
      </main>

      {/* Floating Help */}
      <div className="fixed bottom-6 right-6 z-20 flex items-center gap-2 bg-surface-container-lowest py-2 px-4 rounded-full shadow-lg border border-outline-variant/10 cursor-pointer hover:bg-surface transition-colors">
        <span className="material-symbols-outlined text-primary">help_center</span>
        <span className="text-xs font-bold text-on-surface">Precisa de ajuda?</span>
      </div>
    </div>
  );
}
