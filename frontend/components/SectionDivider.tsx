"use client";

interface SectionDividerProps {
  variant?: "line" | "space";
}

const SectionDivider = ({ variant = "space" }: SectionDividerProps) => {
  if (variant === "line") {
    return (
      <div className="w-full py-0 my-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800/50 to-transparent" />
      </div>
    );
  }

  // space variant (default) - just spacing
  return <div className="h-8" />;
};

export default SectionDivider;
