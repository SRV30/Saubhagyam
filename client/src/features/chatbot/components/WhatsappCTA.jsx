const WhatsappCTA = ({ label }) => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <a href={`https://wa.me/${number}`} target="_blank" rel="noreferrer" className="mt-3 inline-block rounded-full bg-brand-gold/20 px-4 py-2 text-xs font-semibold text-brand-gold">
      {label}
    </a>
  );
};

export default WhatsappCTA;
