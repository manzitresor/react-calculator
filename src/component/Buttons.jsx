
/* eslint-disable react/prop-types */
export default function Buttons({index,button,handleClick}) {
  return (
    <div>
      <div  
            className={`h-24 border border-gray-500 text-4xl flex items-center justify-center cursor-pointer ${
            (index + 1) % 4 === 0 ? 'bg-orange-400' : 'bg-gray-300'
              }`}
              onClick={handleClick}> {button}
      </div>
    </div>
  )
}
