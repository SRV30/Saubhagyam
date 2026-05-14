const QuickReplies = ({ actionProvider, options }) => (
  <div className="mt-2 flex flex-wrap gap-2">
    {options.map((label) => (
      <button
        key={label}
        onClick={() => {
          if (label.includes('Kundli')) actionProvider.handleKundli();
          else if (label.includes('जन्म') || label.includes('birth')) actionProvider.handleBirthTime();
          else if (label.includes('book') || label.includes('बुक')) actionProvider.handleBooking();
          else actionProvider.handleServiceChoice();
        }}
        className="rounded-full border border-brand-gold/50 px-3 py-1 text-xs text-brand-gold hover:bg-brand-gold/15"
      >
        {label}
      </button>
    ))}
  </div>
);

export default QuickReplies;
