import React from "react";

interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <p className="mb-5 text-[10px] tracking-[0.4em] font-cinzel text-gold font-semibold capitalize">
      ✦ {label} ✦
    </p>
  );
};

export default SectionLabel;
