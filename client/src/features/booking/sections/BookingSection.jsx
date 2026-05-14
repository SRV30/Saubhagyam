import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StepIndicator from "../components/StepIndicator";
import { services, serviceSpecificFields } from "../utils/bookingConfig";
import { buildWhatsappMessage } from "../utils/buildWhatsappMessage";

const initialState = {
  service: "",
  name: "",
  phone: "",
  birthDate: "",
  birthTime: "",
  birthPlace: "",
  fullName: "",
  dominantHand: "",
  concern: "",
  message: "",
  unknownBirthDate: false,
  unknownBirthTime: false,
  unknownBirthPlace: false,
};

const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const dynamicFields = useMemo(
    () => serviceSpecificFields[formData.service] || [],
    [formData.service],
  );

  const onChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const submitToWhatsApp = () => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = buildWhatsappMessage(formData);
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel mx-auto w-full max-w-4xl p-6 sm:p-10"
      >
        <h2 className="font-heading text-center text-4xl text-brand-gold-bright">
          Book Consultation
        </h2>
        <p className="mt-2 text-center text-brand-cream/80">
          Premium guidance begins with a personalized consultation request.
        </p>

        <StepIndicator step={step} />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <input
                value={formData.name}
                onChange={(e) => onChange("name", e.target.value)}
                placeholder="Your Name"
                className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
              />
              <input
                value={formData.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                placeholder="Phone Number"
                className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
              />
              <select
                value={formData.service}
                onChange={(e) => onChange("service", e.target.value)}
                className="sm:col-span-2 rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {dynamicFields.includes("birthDate") && (
                <>
                  <input
                    disabled={formData.unknownBirthDate}
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => onChange("birthDate", e.target.value)}
                    className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none disabled:opacity-60"
                  />
                  <label className="flex items-center gap-2 text-sm text-brand-cream/85">
                    <input
                      type="checkbox"
                      checked={formData.unknownBirthDate}
                      onChange={(e) =>
                        onChange("unknownBirthDate", e.target.checked)
                      }
                    />{" "}
                    I don't know exact birth date
                  </label>
                </>
              )}
              {dynamicFields.includes("birthTime") && (
                <>
                  <input
                    disabled={formData.unknownBirthTime}
                    type="time"
                    value={formData.birthTime}
                    onChange={(e) => onChange("birthTime", e.target.value)}
                    className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none disabled:opacity-60"
                  />
                  <label className="flex items-center gap-2 text-sm text-brand-cream/85">
                    <input
                      type="checkbox"
                      checked={formData.unknownBirthTime}
                      onChange={(e) =>
                        onChange("unknownBirthTime", e.target.checked)
                      }
                    />{" "}
                    I don't know birth time
                  </label>
                </>
              )}
              {dynamicFields.includes("birthPlace") && (
                <>
                  <input
                    disabled={formData.unknownBirthPlace}
                    value={formData.birthPlace}
                    onChange={(e) => onChange("birthPlace", e.target.value)}
                    placeholder="Birth Place"
                    className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none disabled:opacity-60"
                  />
                  <label className="flex items-center gap-2 text-sm text-brand-cream/85">
                    <input
                      type="checkbox"
                      checked={formData.unknownBirthPlace}
                      onChange={(e) =>
                        onChange("unknownBirthPlace", e.target.checked)
                      }
                    />{" "}
                    I don't know birth place
                  </label>
                </>
              )}
              {dynamicFields.includes("fullName") && (
                <input
                  value={formData.fullName}
                  onChange={(e) => onChange("fullName", e.target.value)}
                  placeholder="Full Name"
                  className="sm:col-span-2 rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
                />
              )}
              {dynamicFields.includes("dominantHand") && (
                <select
                  value={formData.dominantHand}
                  onChange={(e) => onChange("dominantHand", e.target.value)}
                  className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
                >
                  <option value="">Dominant Hand</option>
                  <option>Right</option>
                  <option>Left</option>
                </select>
              )}
              {dynamicFields.includes("concern") && (
                <input
                  value={formData.concern}
                  onChange={(e) => onChange("concern", e.target.value)}
                  placeholder="Your Concern"
                  className="rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
                />
              )}
              {dynamicFields.includes("message") && (
                <textarea
                  value={formData.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  placeholder="Share your message"
                  className="sm:col-span-2 min-h-24 rounded-lg border border-brand-gold/30 bg-brand-midnight/40 px-4 py-3 text-brand-cream outline-none"
                />
              )}
              {dynamicFields.length === 0 && (
                <p className="sm:col-span-2 text-brand-cream/80">
                  No additional details required for this service.
                </p>
              )}
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              className="space-y-4 text-brand-cream/90"
            >
              <p>Review your details and continue to WhatsApp.</p>
              <div className="rounded-xl border border-brand-gold/30 bg-brand-midnight/35 p-4 text-sm">
                <p>
                  <span className="text-brand-gold">Service:</span>{" "}
                  {formData.service || "-"}
                </p>
                <p>
                  <span className="text-brand-gold">Name:</span>{" "}
                  {formData.name || "-"}
                </p>
                <p>
                  <span className="text-brand-gold">Phone:</span>{" "}
                  {formData.phone || "-"}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap justify-between gap-3">
          <button
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="btn-outline-gold px-5 py-2 disabled:opacity-40"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              disabled={step === 1 && !formData.service}
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              className="btn-gold px-6 py-2 disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button onClick={submitToWhatsApp} className="btn-gold px-6 py-2">
              Continue on WhatsApp
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BookingSection;
