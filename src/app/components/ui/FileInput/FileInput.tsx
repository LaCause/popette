import { Upload } from "lucide-react";

type FileInputProps = {
  onChange: (file: File | null) => void;
  fileName?: string;
  disabled?: boolean;
};

export function FileInput({ onChange, fileName, disabled }: FileInputProps) {
  return (
    <label
      htmlFor="file-upload"
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium shadow transition
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer bg-primary text-white hover:brightness-110 active:scale-95"}
      `}
    >
      <Upload size={18} />
      {fileName || "Choisir un fichier"}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="sr-only"
        disabled={disabled}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </label>
  );
}
