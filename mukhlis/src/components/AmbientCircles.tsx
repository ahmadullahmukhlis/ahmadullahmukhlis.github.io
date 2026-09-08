const circles = [
  {
    id: "one",
    eyebrow: "Portfolio",
    label: "Ahmadullah Mukhlis",
  },
  {
    id: "two",
    eyebrow: "Phone",
    label: "+93 779 404 681",
  },
  {
    id: "three",
    eyebrow: "LinkedIn",
    label: "linkedin.com/in/ahmadullahmukhlis",
  },
  {
    id: "four",
    eyebrow: "Focus",
    label: "Secure systems and product interfaces",
  },
];

export function AmbientCircles() {
  return (
    <div className="ambient-circles" aria-hidden="true">
      {circles.map((circle) => (
        <span key={circle.id} className={`ambient-circle ambient-circle-${circle.id}`}>
          <span className="ambient-circle-eyebrow">{circle.eyebrow}</span>
          <span className="ambient-circle-label">{circle.label}</span>
        </span>
      ))}
    </div>
  );
}
