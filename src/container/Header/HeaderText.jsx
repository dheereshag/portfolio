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
            "I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on. I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad's Blackberry into orbit and was able to transmit a photo back down to our family computer from space. Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards."
          }
          speed={0.005}
          delay={1}
        />
      </div>
    </div>
  );
};

export default HeaderText;
