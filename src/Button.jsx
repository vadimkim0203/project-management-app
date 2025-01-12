export default function Button({buttonText, ...props}) {
  return (
    <button className="text-xs md:text-base text-stone-400 rounded-md bg-stone-700 px-4 py-2 hover:bg-stone-600 hover:text-stone-100" {...props}>{buttonText}</button>
  )
}