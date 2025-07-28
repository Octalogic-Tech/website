import * as React from "react";
import { Select } from "@/components/ui/select";

type Language = {
  code: string;
};

interface LanguageSelectProps {
  language: Language[];
  defaultValue?: string;
  onValueChange?: (val: string) => void;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  language,
  defaultValue,
  onValueChange,
}) => {
  const options = language.map((l) => ({
    label: l.code.toUpperCase(),
    value: l.code,
  }));

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      variant="outline"
      size="default"
    />
  );
};
