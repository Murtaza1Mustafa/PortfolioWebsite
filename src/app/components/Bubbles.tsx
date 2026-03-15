
const Bubbles = () => {

  const size = Math.random() * 20 + 10; // 10px - 40px
  const left = Math.random() * 100; // % across screen
  const delay = Math.random() * 10; // stagger animation

  return (
    <div
      className="absolute bottom rounded-full bg-gradient-to-br from-[#48cae4] to-[#90e0ef] opacity-75 blur-[1px] animate-bubble"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: 0,
        animationDelay: `${delay}s`
      }}
    />
  );
};

export default Bubbles;