import fatherJohnPope from '@/assets/father-john-pope.png';

const FooterSection = () => {
  return (
    <div className="footer-section py-8 px-4 mt-4">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src={fatherJohnPope}
          alt="Father John"
          className="w-48 mx-auto mb-6"
        />
        <h2 className="text-lg md:text-xl font-bold leading-snug mb-6">
          For over two decades in priestly ministry, Father John has guided believers around the world, helping them experience miracles and answers that once felt impossible.
        </h2>
        <p className="text-xs comment-action mb-2">
          Copyright 2026 - Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs comment-action">
          <a href="#" className="underline hover:no-underline">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="underline hover:no-underline">Política de Privacidade</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
