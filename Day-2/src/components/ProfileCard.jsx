import './ProfileCard.css'

const user = {
    name: "Sanidhya Singh Chandel",
    info: "I am a B.tech Student from the CSIT background",
    goal: "I m Trying to Learn the ReactJs with GSAP Animation's",
    quote: "Code is like humor. When you have to explain it, it’s bad."
}

export default function ProfileCard() {
    return (
        <div className="mainDiv">
            <h1>{user.name}</h1>
            <p>{user.info}</p>
            <p>{user.goal}</p>
            <h1>{user.quote}</h1>
        </div>
    )
};