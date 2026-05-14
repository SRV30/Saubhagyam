import { useEffect } from 'react';

const setMeta = (selector, attribute, value) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    const [key, keyValue] = selector.replace('meta[', '').replace(']', '').split('=');
    tag.setAttribute(key, keyValue.replace(/"/g, ''));
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
};

const usePageSEO = ({ title, description, ogTitle, ogDescription, ogType = 'website' }) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', ogTitle || title);
    setMeta('meta[property="og:description"]', 'content', ogDescription || description);
    setMeta('meta[property="og:type"]', 'content', ogType);
  }, [title, description, ogTitle, ogDescription, ogType]);
};

export default usePageSEO;
