/**
 * MorphingBlob – a pure-CSS continuously morphing blob used as a deep
 * background layer in the Hero. Relies on the .morphing-blob / .morph-N
 * keyframes defined in index.css.
 */
export default function MorphingBlob({
  className = "",
  animIndex = 1,
  delay = "0s",
}) {
  return (
    <div
      aria-hidden="true"
      className={`morphing-blob morph-${animIndex} ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}
