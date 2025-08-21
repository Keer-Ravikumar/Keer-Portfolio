import { Typewriter } from 'react-simple-typewriter';

function Typewriting() {
  return (
    <h4>
        {' '}
      <span style={{ color: '#e8e6e3' }}>
        <Typewriter
          words={['Full-Stack Developer', 'Backend Developer', 'Frontend Developer', 'Java Developer']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h4>
  );
}

export default Typewriting;
