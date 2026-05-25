const WA_URL = 'https://wa.me/5516992827129?text=Olá%2C%20vim%20pelo%20site%20da%20PAC%20Advogados%20e%20gostaria%20de%20conversar%20sobre%20meu%20negócio.';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.854L0 24l6.335-1.502A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.002-1.368l-.36-.214-3.728.884.924-3.638-.235-.374A9.79 9.79 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const ContactPanel = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="contact-panel contact-panel--wa" onClick={e => e.stopPropagation()}>
        <button type="button" className="close" onClick={onClose} aria-label="Fechar">×</button>

        <div className="cp-wa-eyebrow">CONTATO DIRETO</div>
        <h3 className="cp-wa-title">Aqui, a conversa começa<br />sem burocracia.</h3>
        <p className="cp-wa-sub">
          Não temos formulário para preencher nem fila de atendimento. Fale diretamente com o escritório pelo WhatsApp — um sócio responde pessoalmente.
        </p>

        <div className="cp-wa-divider" />

        <p className="cp-wa-hint">
          Resposta ágil · Sem intermediários · Diagnóstico inicial gratuito
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cp-wa-btn"
          onClick={onClose}
        >
          <WhatsAppIcon />
          Falar diretamente no WhatsApp
        </a>

        <p className="cp-wa-fine">
          (16) 99282-7129 · PAC Advogados
        </p>
      </div>
    </div>
  );
};

export default ContactPanel;
