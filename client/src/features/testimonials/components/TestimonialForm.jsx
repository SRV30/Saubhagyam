import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TestimonialForm = ({ onSubmitted }) => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ fullName: '', review: '', rating: 5 });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  const submit = async () => {
    if (form.fullName.trim().length < 2) return setError(i18n.language.startsWith('hi') ? 'नाम सही भरें।' : 'Enter a valid name.');
    if (form.review.trim().length < 20) return setError(i18n.language.startsWith('hi') ? 'रिव्यू कम से कम 20 अक्षर का होना चाहिए।' : 'Review must be at least 20 characters.');
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed');
      setForm({ fullName: '', review: '', rating: 5 });
      onSubmitted();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-12 rounded-3xl border border-brand-gold/30 bg-brand-elevated/40 p-6 shadow-[0_0_30px_rgba(123,47,247,0.22)] backdrop-blur-xl">
      <h3 className="font-heading text-2xl text-brand-gold">{t('home.reviewFormTitle')}</h3>
      <div className="mt-4 grid gap-3">
        <input className="rounded-xl border border-brand-gold/30 bg-brand-midnight/30 px-4 py-3" placeholder={t('home.fullName')} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        <textarea rows={4} className="rounded-xl border border-brand-gold/30 bg-brand-midnight/30 px-4 py-3" placeholder={t('home.review')} value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} />
        <div className="flex items-center gap-2">
          {[1,2,3,4,5].map((star) => <button key={star} onClick={() => setForm({ ...form, rating: star })} className={`text-2xl ${form.rating >= star ? 'text-brand-gold' : 'text-brand-cream/30'}`}>★</button>)}
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={submit} disabled={loading} className="btn-gold">{loading ? '...' : t('home.submitReview')}</motion.button>
      </div>
    </motion.div>
  );
};

export default TestimonialForm;
