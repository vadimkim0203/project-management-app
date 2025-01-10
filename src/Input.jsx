
// since we have multiple elements with the same structure it is better to create a component Input.jsx
export default function Input({ textarea, label, ...props }) {
  return (
    <p className="flex flex-col gap-2">
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
