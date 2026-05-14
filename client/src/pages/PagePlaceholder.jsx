import { useTranslation } from 'react-i18next';

const PagePlaceholder = ({ titleKey }) => {
  const { t } = useTranslation();

  return (
    <section className="glass-panel mx-auto w-full max-w-6xl p-8 text-center">
      <h1 className="font-heading text-4xl text-brand-gold">{t(titleKey)}</h1>
      <p className="mt-4 text-brand-cream/90">{t('common.comingSoon')}</p>
    </section>
  );
};

export default PagePlaceholder;
