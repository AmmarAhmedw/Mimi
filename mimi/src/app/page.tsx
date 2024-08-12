"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import Bush from '@/images/bush.jpg'; // Ensure the path to the image is correct
import LoveNotes from '@/app/components/lovenotes'; // Adjust the import path if necessary

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const sectionRefs = {
    ourStory: useRef<HTMLElement | null>(null),
    romanticMoments: useRef<HTMLElement | null>(null),
    loveNotes: useRef<HTMLElement | null>(null),
    futureTogether: useRef<HTMLElement | null>(null),
  };
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 50%',
              end: 'bottom 30%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }

    const names = ["Mimi  ❤️", "Babe  ❤️", "Sugarpie  ❤️", "Sweetheart  ❤️", "Honey  ❤️", "Queen  ❤️", "Heartthrob  ❤️", "Angel  ❤️"];
    let currentIndex = 0;

    const changeName = () => {
      if (nameRef.current) {
        gsap.to(nameRef.current, {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            nameRef.current!.textContent = names[currentIndex];
            gsap.to(nameRef.current, { opacity: 1, duration: 0.5 });
            currentIndex = (currentIndex + 1) % names.length;
          },
        });
      }
    };

    const intervalId = setInterval(changeName, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = (section: string) => {
    let content = { title: "", content: "" };

    switch (section) {
      case "ourStory":
        content = {
          title: "Our Beautiful Story",
          content: "Hey Mimi, Remember how we met? It all started on Discord. Thanks to Overbooked. I'm so glad I made the reddit post when I did and you joined when you joined. Who would have thought that a chance encounter through a book club would leave to something so amazing? I'll neverf forget those nights we spent chatting, talking until 4-5AM. It felt like as if we were in our own little world just talking about everything that came to our minds. Those conversations became the best part of my day and you quickly became someone I looked forward to talking ev eryday. If I hadn';hadn't met you then. I honestly don't know where I'd be. I was wandering and feeling lost but you helped me find my way. You've been my guiding light, and I can't do enough to thank you for it. You have brought so much love and clarity into my life that I will forever be grateful to you. Mimi, You are incredible, caring , gorgeous, Kancha XD and everything I could have ever wished for. I love you more than words can say but necklace can which is Infinity. Our story is my favourite and its all because of you. ",
        };
        break;
      case "romanticMoments":
        content = {
          title: "Romantic Moments",
          content: "The first time we went on a date to Steak Away, even though the food was a letdown, I loved spending time with you so much. It was amazing meeting you for the first time. Remember how we changed tables like 3 times lol. Road par bethey they pehle ;( The food was L that day too but It didn't matter because we were making memories together and that's what mattered the most. You are so incredible adn amazing that I can't help but feel overwhelmed with love. I'm writing this with tears in my eyes because the depth of my feelings for you is something I can't fully ut into words. It's the truth, and I'm not joking at when I say that I love you more than I ever thought it was possible. Also Last night was also so so much fun, even though the food was shit but what I really loved was spending time with you yesterday, laughing , enjoying each other's companies. The time was too short but It always feels too short but when I am with you I want to spend as much time as I can without letting you go home. You are perfect in every way and I'm so grateful for every moment we get to spend together. You make my life infinitely better just by being in it. <3",
        };
        break;
      case "loveNotes":
        content = {
          title: "Love Notes",
          content: "Mimi, I just wanted to take a moment to tell you how much I really love you. Today, I couldn't sop thinking about how your laugh brightens my days. I was just remembering your laugh from last night and it made me so happy. You have no idea how happy you make me. You are so amazing yar. Your kindness and warmth make everything better. The hand holding and everything I fucking I love it. I love the shoulders kisses sooo much I can't even begin to tell them into words. Remember the time we used to watch movies late at night every night it used to be so much fun. I had the most fun ever in my life with you. I wanna propose how about we pick a day as a movie night? Let me know how this idea sounds to you. I can't wait to spend more time with you. Every day with you feels like a blessing from god. Know that I love you as much as planet Ajrgekjrskkene and if you dont believe me you can always visit  https://planetajrgekjrskkene.netlify.app/ and see it for yourself that the planet does indeed exist and it is 300 sextillion years away from Earth. Forever and always, Your Wolfie. ",
        };
        break;
      case "futureTogether":
        content = {
          title: "Future Together ",
          content: "I know we have our difficulties right now, but everything will be perfect. Don't worry about it. I am doing the best I can. Just give me a year, and it will be perfect. I’m working two jobs right now, gaining experience as a software engineer and as a QA. I’ll tell you more about it in detail soon, but please know that I’m going to go to any length to make sure we have a beautiful future together. You are going to be my wife, and we’ll have a family together no matter what. I love you so much, and I’m committed to making our dreams come true. Forever yours, Wolfie",
        };
        break;
      default:
        break;
    }

    setModalContent(content);
    setShowModal(true);

    // Add heart confetti effect
    setTimeout(() => {
      gsap.fromTo(
        ".confetti",
        { y: -100, opacity: 0 },
        {
          y: 200,
          opacity: 1,
          duration: 2,
          stagger: 0.1,
          ease: "power1.out",
          onComplete: () => {
            gsap.to(".confetti", { opacity: 0, duration: 1 });
          }
        }
      );
    }, 500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-pink-100 min-h-screen">
      <header
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${Bush.src})` }}
        ref={headerRef}
      >
        <div className="flex flex-col items-center justify-center h-full bg-pink-900 bg-opacity-50 text-white text-center p-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span>Happy Birthday</span>
            <div className="flex flex-col justify-center ml-0 sm:ml-[5vw] items-center mt-2">
              <span>
                My <span ref={nameRef}>Love</span>
              </span>
            </div>
          </h1>
          <p className="text-lg sm:text-xl mt-2">A journey through our beautiful memories</p>
        </div>
      </header>

      {/* New Section: Our Story */}
      <section
        className="min-h-screen flex items-center justify-center w-full bg-pink-300 px-4 sm:px-10"
        ref={sectionRefs.ourStory}
      >
        <div className="p-6 sm:p-10 bg-white rounded-[3vw] shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex justify-center">Our Story</h2>
          <p className="text-base sm:text-lg mb-4 ">Click the button to view our story.</p>
          <button
            onClick={() => handleButtonClick('ourStory')}
            className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-[0.5vw] ml-[3.5vw] hover:bg-pink-700 transition-transform transform hover:scale-105"
          >
            Show Message
          </button>
        </div>
      </section>

      {/* New Section: Romantic Moments */}
      <section
        className="min-h-screen flex items-center justify-center w-full bg-pink-400 px-4 sm:px-10"
        ref={sectionRefs.romanticMoments}
      >
        <div className="p-6 sm:p-10 bg-white rounded-[3vw] shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex justify-center">Romantic Moments</h2>
          <p className="text-base sm:text-lg mb-4">Click the button to view romantic moments.</p>
          <button
            onClick={() => handleButtonClick('romanticMoments')}
           className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-[0.5vw] ml-[6vw] hover:bg-pink-700 transition-transform transform hover:scale-105"
          >
            Show Message
          </button>
        </div>
      </section>

      {/* New Section: Love Notes */}
      <section
        className="min-h-screen flex items-center justify-center w-full bg-red-500 px-4 sm:px-10"
        ref={sectionRefs.loveNotes}
      >
        <LoveNotes onClick={() => handleButtonClick('loveNotes')} />
      </section>

      {/* New Section: Future Together */}
      <section
        className="min-h-screen flex items-center justify-center w-full bg-pink-700px-4 sm:px-10"
        ref={sectionRefs.futureTogether}
      >
        <div className="p-6 sm:p-10 bg-white rounded-[3vw] shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex justify-center">Future Together</h2>
          <p className="text-base sm:text-lg mb-4">Click the button to view our future together.</p>
          <button
            onClick={() => handleButtonClick('futureTogether')}
           className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-[0.5vw] ml-[6vw] hover:bg-pink-700 transition-transform transform hover:scale-105"
          >
            Show Message
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{modalContent.title}</h2>
            <p className="text-base sm:text-lg mb-4">{modalContent.content}</p>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confetti Elements */}
      <div className="confetti absolute top-0 left-0 w-full h-full pointer-events-none z-40">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti-item absolute w-2.5 h-2.5 bg-red-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
