export default function Calculate() {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    
    return (
        <div>
            <div className='h-16 w-full bg-gray-500 text-white'>
                <h1 className="text-right text-5xl px-4 ">0</h1>
                <div className="grid grid-cols-4 w-full">
                    {buttons.map((button, index) => (
                        <div
                            key={index}
                            className={`h-24 border border-gray-500 text-4xl flex items-center justify-center cursor-pointer ${
                                (index + 1) % 4 === 0 ? 'bg-orange-400' : 'bg-gray-300'
                            }`}
                        >
                            {button}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
