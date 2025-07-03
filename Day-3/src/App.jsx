import { useState } from 'react';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const users = [
    {
      name: 'Sanidhya Singh Chandel',
      info: 'B.Tech CSIT Student',
      goal: 'Trying to learn ReactJS with GSAP',
      quote: 'Code is like humor. When you have to explain it, it’s bad.',
    },
    {
      name: 'React Learner',
      info: 'Frontend Developer in Training',
      goal: 'Master useState and props',
      quote: 'Stay curious, stay coding.',
    }
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="h-[100vh] bg-black/80 flex justify-center items-center p-8">
      <div className='border-white bg-white border border-2 rounded-lg p-8 flex justify-center items-center flex-col gap-4'>
        <ProfileCard user={users[index]} />
        <button
          className="bg-blue-500 h-12 rounded text-black-700 font-semibold"
          onClick={() => setIndex((index + 1) % users.length)}
        >
          Switch Profile
        </button>
      </div>
    </div>
  );
};

export default App;