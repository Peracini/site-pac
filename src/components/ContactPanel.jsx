import { useState, useEffect } from 'react';

const ContactPanel = ({ open, onClose }) => {
  const [step, setStep] = useState('form');
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', area: 'ma', msg: '' });

  useEffect(() => {
    if (open) setStep('form');
  }, [open]);

  if (!open) return null;

  const submit = (e) => { e.preventDefault(); setStep('done'); };

  return (
    <div className="modal-bg" onClick={onClose}>
      <form className="contact-panel" onClick={e => e.stopPropagation()} onSubmit={submit} style={{ position: 'relative' }}>
        <button type="button" className="close" onClick={onClose} aria-label="Fechar">×</button>
        {step === 'form' ? (
          <>
            <h3>Vamos conversar.</h3>
            <p style={{ fontSize: 14, color: '#000', opacity: .7, margin: '-6px 0 2px' }}>
              Resposta em até 1 dia útil pelo sócio responsável.
            </p>
            <a
              href="https://wa.me/5516992827129"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.12 1.523 5.854L0 24l6.335-1.502A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.002-1.368l-.36-.214-3.728.884.924-3.638-.235-.374A9.79 9.79 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              Falar pelo WhatsApp agora
            </a>
            <div className="row2">
              <div className="field">
                <label>Nome</label>
                <input required value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} placeholder="Como podemos chamá-lo?" />
              </div>
              <div className="field">
                <label>Empresa</label>
                <input value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} placeholder="Razão social" />
              </div>
            </div>
            <div className="field">
              <label>E-mail corporativo</label>
              <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="contato@empresa.com.br" />
            </div>
            <div className="field">
              <label>Área de interesse</label>
              <select value={form.area} onChange={e => setForm({ ...form, area: e.target.value })}>
                <option value="ma">M&amp;A</option>
                <option value="societario">Estruturação societária</option>
                <option value="franquia">Franquia / licenciamento</option>
                <option value="contratos">Contratos</option>
                <option value="patrimonio">Holding / proteção patrimonial</option>
                <option value="pi">Propriedade intelectual</option>
              </select>
            </div>
            <div className="field">
              <label>Como podemos ajudar?</label>
              <textarea rows="3" value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Conte um pouco do contexto."></textarea>
            </div>
            <button type="submit" className="submit">Solicitar diagnóstico</button>
          </>
        ) : (
          <>
            <h3>Recebemos, {form.nome.split(' ')[0] || 'obrigado'}.</h3>
            <div className="success">
              Um sócio responsável retornará em até 1 dia útil para o e-mail <strong>{form.email}</strong>. Enquanto isso, fique à vontade para responder ao e-mail de confirmação com qualquer documento útil para o diagnóstico.
            </div>
            <button type="button" className="submit" onClick={onClose}>Fechar</button>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactPanel;
