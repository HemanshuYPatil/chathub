import { examplePrompts } from "@/lib/prompts";
import { motion } from "framer-motion";

export type TChatExamples = {
  onExampleClick: (prompt: string) => void;
  show: boolean;
};
export const ChatExamples = ({ onExampleClick, show }: TChatExamples) => {
  if (!show) return null;
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="grid grid-cols-3 gap-3 w-[700px]">
        {examplePrompts?.map((example, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            className="flex bg-white shadow-sm dark:bg-zinc-800 flex-col gap-2 items-start text-sm py-3 px-4 border border-dark/5 dark:border-white/5 text-zinc-600 dark:text-zinc-400 w-full rounded-2xl hover:bg-zinc-50 dark:hover:bg-black/20 cursor-pointer"
            key={index}
            animate={{
              opacity: 1,
            }}
            onClick={() => {
              onExampleClick(example.prompt);
            }}
          >
            <p className="text-sm text-zinc-800 dark:text-white font-medium w-full">
              {example.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
