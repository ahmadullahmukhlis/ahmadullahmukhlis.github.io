const circles = [
  {
    id: "one",
    eyebrow: "Projects",
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

const stars = Array.from({ length: 18 }, (_, index) => index + 1);

export function AmbientCircles() {
  return (
    <div className="ambient-circles" aria-hidden="true">
      <span className="ambient-galaxy ambient-galaxy-one" />
      <span className="ambient-galaxy ambient-galaxy-two" />
      <div className="ambient-stars">
        {stars.map((star) => (
          <span key={star} className={`ambient-star ambient-star-${star}`} />
        ))}
      </div>
      {circles.map((circle) => (
        <span key={circle.id} className={`ambient-circle ambient-circle-${circle.id}`}>
          <span className="ambient-circle-eyebrow">{circle.eyebrow}</span>
          <span className="ambient-circle-label">{circle.label}</span>
          <span className="ambient-orbit ambient-orbit-a" />
          <span className="ambient-orbit ambient-orbit-b" />
        </span>
      ))}
    </div>
  );
}
