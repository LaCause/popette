import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};
type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};
type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  as: "select";
};

export type FormFieldProps = (
  | InputFieldProps
  | TextareaFieldProps
  | SelectFieldProps
) & {
  label?: string;
  error?: string;
  containerClassName?: string;
};

export function FormField({
  label,
  error,
  containerClassName,
  className,
  as,
  ...rest
}: FormFieldProps) {
  const fieldClassName = [
    className ?? "form-input",
    error && "border-red-500",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {as === "textarea" ? (
        <textarea
          className={fieldClassName}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : as === "select" ? (
        <select
          className={fieldClassName}
          {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
        />
      ) : (
        <input
          className={fieldClassName}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
