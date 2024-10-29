export function InputBox ({label,placeholder,onChange})  {
    return <>
    <div className="text-sm font-medium text-left text-gray-300 py-2">{label}</div>
    <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 text-gray-300 border rounded border-gray-500 bg-orange-900 bg-opacity-50" />
    </>
}