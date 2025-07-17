interface InputProps {
  label: string;
  handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  user: string;
}
const Input:React.FC<InputProps> = ({label, handleChange, user}) => {
    return (
    <>
      <label htmlFor={label} className="block text-gray-700 font-medium mb-2">{label[0].toUpperCase() + label.slice(1)}</label>
      <input type="text" id={label} name={label} value={user} onChange={handleChange} placeholder={`Enter ${label}`}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </>
  )
}

export default Input