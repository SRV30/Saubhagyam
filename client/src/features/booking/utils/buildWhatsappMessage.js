export const buildWhatsappMessage = (data) => {
  const lines = [
    "New Consultation Request - Saubhagyam",
    `Service: ${data.service}`,
    `Name: ${data.name || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
  ];

  if (data.birthDate || data.unknownBirthDate) {
    lines.push(
      `Birth Date: ${
        data.unknownBirthDate ? "I don't know exact birth date" : data.birthDate
      }`
    );
  }

  if (data.birthTime || data.unknownBirthTime) {
    lines.push(
      `Birth Time: ${
        data.unknownBirthTime ? "I don't know birth time" : data.birthTime
      }`
    );
  }

  if (data.birthPlace || data.unknownBirthPlace) {
    lines.push(
      `Birth Place: ${
        data.unknownBirthPlace ? "I don't know birth place" : data.birthPlace
      }`
    );
  }

  if (data.fullName) lines.push(`Full Name (for Numerology): ${data.fullName}`);
  if (data.dominantHand) lines.push(`Dominant Hand: ${data.dominantHand}`);
  if (data.concern) lines.push(`Concern: ${data.concern}`);
  if (data.message) lines.push(`Message: ${data.message}`);

  return encodeURIComponent(lines.join("\n"));
};
