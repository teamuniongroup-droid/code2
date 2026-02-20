const UrgencyBar = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="urgency-bar py-3 px-4 text-center text-sm md:text-base font-semibold">
      You were chosen. Watch now — it goes offline today{' '}
      <span className="urgency-date font-bold">{formattedDate}</span>
    </div>
  );
};

export default UrgencyBar;
