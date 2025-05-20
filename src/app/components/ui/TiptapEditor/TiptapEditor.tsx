"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { EDITOR_STYLE } from "./TiptabEditor.const";

interface TiptapEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
        autolink: true,
      }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt(
      "Entrez l’URL du lien :",
      previousUrl || "https://"
    );

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 bg-tertiary-container p-3 border border-outline rounded-2xl shadow-sm">
        <ToolbarButton
          label="Gras"
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        />
        <ToolbarButton
          label="Italique"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        />
        <ToolbarButton
          label="Souligné"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
        />
        <ToolbarButton
          label="Titre"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        />
        <ToolbarButton
          label="Liste"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        />
        <ToolbarButton
          label="Lien"
          onClick={setLink}
          active={editor.isActive("link")}
        />
        <ToolbarButton
          label="Paragraphe"
          onClick={() => editor.chain().focus().setParagraph().run()}
          active={editor.isActive("paragraph")}
        />
        <ToolbarButton
          label="↺"
          onClick={() => editor.chain().focus().undo().run()}
        />
        <ToolbarButton
          label="↻"
          onClick={() => editor.chain().focus().redo().run()}
        />
      </div>

      {/* Editor */}
      <div
        className="border border-outline bg-white min-h-[240px] px-5 py-4 rounded-2xl shadow-sm focus:outline-none cursor-text"
        onClick={() => editor.commands.focus()}
        aria-label="Éditeur de contenu"
      >
        <EditorContent editor={editor} className={EDITOR_STYLE} />
      </div>
    </div>
  );
}

function ToolbarButton({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1.5 text-sm rounded-full font-body transition border outline-none focus:ring-2 focus:ring-primary/50 ${
        active
          ? "bg-primary text-on-primary border-transparent"
          : "bg-white text-on-tertiary-container border-outline hover:bg-primary-container"
      }`}
    >
      {label}
    </button>
  );
}
