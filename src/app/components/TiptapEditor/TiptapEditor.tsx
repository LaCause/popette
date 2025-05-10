"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EDITOR_STYLE } from "./TiptabEditor.const";

export default function TiptapEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 bg-tertiary-container p-3 border border-outline rounded-xl shadow-sm">
        <FormatButton
          label="Gras"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <FormatButton
          label="Italique"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <FormatButton
          label="Titre"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <FormatButton
          label="Liste"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <FormatButton
          label="Paragraphe"
          active={editor.isActive("paragraph")}
          onClick={() => editor.chain().focus().setParagraph().run()}
        />
        <FormatButton
          label="↺"
          onClick={() => editor.chain().focus().undo().run()}
        />
        <FormatButton
          label="↻"
          onClick={() => editor.chain().focus().redo().run()}
        />
      </div>

      <div
        className="border border-outline bg-white min-h-[240px] px-5 py-4 rounded-xl shadow-sm focus:outline-none cursor-text"
        onClick={() => editor.commands.focus()}
      >
        <EditorContent editor={editor} className={EDITOR_STYLE} />
      </div>
    </div>
  );
}

function FormatButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2 py-1 text-sm rounded-md font-body transition border ${
        active
          ? "bg-primary text-on-primary border-transparent"
          : "bg-white text-on-tertiary-container border-outline hover:bg-primary-container"
      }`}
    >
      {label}
    </button>
  );
}
