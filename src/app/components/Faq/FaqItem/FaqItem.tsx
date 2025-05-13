import { ReactNode } from "react";

interface FaqItemProps {
  question: string;
  answer: ReactNode;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="border border-outline rounded-xl p-4 group open:shadow-sm transition-shadow">
      <summary className="cursor-pointer font-semibold text-on-surface group-open:text-primary">
        {question}
      </summary>
      <div className="mt-2 text-on-surface/90 font-body text-sm leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
