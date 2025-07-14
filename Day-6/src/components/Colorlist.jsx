function ColorList({ onColorClick }) {

    const bgColors = [
        { name: "Red", class: "bg-red-600", hover: "hover:bg-red-500" },
        { name: "Blue", class: "bg-blue-600", hover: "hover:bg-blue-500" },
        { name: "Green", class: "bg-green-600", hover: "hover:bg-green-500" },
        { name: "Purple", class: "bg-purple-600", hover: "hover:bg-purple-500" },
        { name: "Orange", class: "bg-orange-600", hover: "hover:bg-orange-500" },
        { name: "Yellow", class: "bg-yellow-600", hover: "hover:bg-yellow-500" },
        { name: "Pink", class: "bg-pink-600", hover: "hover:bg-pink-500" },
        { name: "Teal", class: "bg-teal-600", hover: "hover:bg-teal-500" },
        { name: "Indigo", class: "bg-indigo-600", hover: "hover:bg-indigo-500" },
        { name: "Cyan", class: "bg-cyan-600", hover: "hover:bg-cyan-500" }
    ];

    return (
        <div className="h-[10%] w-[90%] rounded-4xl flex items-center gap-4 bg-white p-2">
            {bgColors.map(e => {
                return (
                    <div key={e.name}
                    onClick={() => onColorClick(e.class,e.name)}
                     className={`h-[90%] w-[10%] hover:cursor-pointer rounded-full flex items-center justify-center ${ e.class } ${ e.hover } font-semibold`}>
                        <h1 className="text-xl text-white">{e.name}</h1>
                    </div>
                )
            })}
        </div>
    )
};

export default ColorList;