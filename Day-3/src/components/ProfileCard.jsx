export default function ProfileCard({ user }) {
    return (
        <div className="rounded-xl bg-white h-[150px] flex flex-col justify-between shadow-md p-6 mt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Hello !! I, am <span className="text-blue-600">{user.name}</span> 😊
            </h1>
            <p className="text-gray-700 mb-2">{user.info}</p>
            <p className="italic text-blue-600 mt-2">{user.goal}</p>
            <blockquote className="mt-4 text-gray-500 border-l-4 border-blue-200 pl-4">
                "{user.quote}"
            </blockquote>
        </div>
    )
};