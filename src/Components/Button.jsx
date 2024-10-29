export function Button({label,onClick}) {
    return <button onClick={onClick} type="button" className="w-full text-white bg-orange-800 bg-opacity-50  hover:bg-orange-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      {label}
    </button>
}