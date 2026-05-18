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
            <p style={{ fontSize: 14, color: '#000', opacity: .7, margin: '-6px 0 6px' }}>
              Resposta em até 1 dia útil pelo sócio responsável.
            </p>
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
