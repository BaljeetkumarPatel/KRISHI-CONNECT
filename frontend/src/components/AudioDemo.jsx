import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, Waves } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioDemo() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Audio Demo –{" "}
          <span className="text-green-600">Try the IVR Voice</span>
        </motion.h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Listen to how our <strong>Smart IVR Assistant</strong> guides farmers,
          labourers, and transport providers in simple and clear language.
        </p>

        {/* CARD */}
        <motion.div
          className="
            bg-white/80 backdrop-blur-xl border border-green-100 
            shadow-xl rounded-3xl mt-14 p-10 mx-auto max-w-3xl
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Audio Title */}
          <h3 className="text-2xl font-bold text-green-700">
            “Welcome to Krishi-Connect IVR System”
          </h3>

          <p className="text-gray-600 mt-2">
            A short 8-second sample from our automated voice assistant.
          </p>

          {/* AUDIO VISUALIZER */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-1 items-end h-12">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying
                      ? `${Math.random() * 40 + 10}px`
                      : "10px",
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: isPlaying ? Infinity : 0,
                    repeatType: "mirror",
                  }}
                  className="w-2 rounded bg-green-500"
                />
              ))}
            </div>
          </div>

          {/* AUDIO CONTROLS */}
          <div className="flex justify-center mt-8 gap-6 items-center">

            {/* Play / Pause Button */}
            <button
              onClick={toggleAudio}
              className="
                w-16 h-16 rounded-full 
                bg-green-600 hover:bg-green-700 
                shadow-lg flex items-center justify-center 
                text-white transition
              "
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>

            {/* Volume Icon */}
            <div className="text-green-600 opacity-80">
              <Volume2 size={32} />
            </div>
          </div>

          {/* Hidden native audio element */}
          <audio
            ref={audioRef}
            src="/sample-ivr.mp3"   // <-- replace with your real IVR audio file
            onEnded={() => setIsPlaying(false)}
          />
        </motion.div>
      </div>
    </section>
  );
}
