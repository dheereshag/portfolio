import Typewriter from "./Typewriter";

const HeaderText = () => {
  return (
    <div>
      <h1 className="text-4xl mb-2 font-extrabold">
        <Typewriter
          text={"I'm Dheeresh. I am a web developer."}
          speed={0.03}
          delay={0}
        />
      </h1>
      <div className="text-lg">
        <Typewriter
          text={
            "Hi, I'm a software developer with a passion for technology and innovation. I studied at IIT Bhubaneswar, where I learned coding and landed a job at RingCentral on day 0. Although I was later laid off, I didn’t let that stop me. Instead, I taught myself devops and other skills in depth, and now I’m a fullstack developer with expertise in next js in frontend and spring boot, django and nodejs in backend. I also have knowledge of devops and aws. I’m always looking for new challenges and opportunities to grow and make a difference in the world of technology."
          }
          speed={0.005}
          delay={1}
        />
      </div>
    </div>
  );
};

export default HeaderText;
