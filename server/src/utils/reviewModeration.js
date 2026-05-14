const profanityWords = ['abuse', 'idiot', 'hate', 'stupid', 'harass', 'fraud', 'scam'];

const hasLink = (text = '') => /(https?:\/\/|www\.|\.com|\.in|t\.me|telegram)/i.test(text);
const hasProfanity = (text = '') => profanityWords.some((word) => text.toLowerCase().includes(word));
const isSpamPattern = (text = '') => /(.)\1{8,}|(buy now|guaranteed profit|free money|loan)/i.test(text);

module.exports = { hasLink, hasProfanity, isSpamPattern };
