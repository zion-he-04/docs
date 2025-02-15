"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import { useEditorStore } from '@/store/use-editor-store';
import { Ruler } from './ruler';
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { Threads } from './threads';
import { useStorage } from '@liveblocks/react';
import { MARGIN_DEFAULT } from '@/constants/margins';

interface EditorProps {
	initialContent?: string | undefined;
}

export const Editor = ({ initialContent}: EditorProps) => {
	const leftMargin = useStorage((root) => root.leftMargin) ?? MARGIN_DEFAULT;
	const rightMargin = useStorage((root) => root.rightMargin) ?? MARGIN_DEFAULT;

	const liveblocks = useLiveblocksExtension({
		initialContent,
		offlineSupport_experimental: true
	});
	const { setEditor }  = useEditorStore();
	
	const editor = useEditor({
		immediatelyRender: false,
		onCreate({ editor }) {
			setEditor(editor);
		},
		onDestroy() {
			setEditor(null);
		},
		onUpdate({ editor }) {
			setEditor(editor);
		},
		onSelectionUpdate({ editor }) {
				setEditor(editor);
		},
		onTransaction({ editor }) {
			setEditor(editor);
		},
		onFocus({ editor }) {
			setEditor(editor);
		},
		onBlur({ editor }) {
			setEditor(editor);
		},
		onContentError({ editor }) {
			setEditor(editor);
		},
		editorProps: {
			attributes: {
				style: `padding-left:${leftMargin}px; padding-right:${rightMargin}px;`,
				class: "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
			},
		},
		extensions: [
			StarterKit.configure({
				history: false
			}),
			TaskItem.configure({
				nested: true,
			}),
			TaskList,
			Table,
			TableCell,
			TableHeader,
			TableRow,
			Image,
			ImageResize,
			Underline,
			FontFamily,
			TextStyle,
			Color,
			Highlight.configure({
				multicolor: true
			}),
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: "https"
			}),
			liveblocks
		],
	});

	return (
		<div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print-bg-white print:overflow-visible">
			<Ruler />
			<div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
				<EditorContent editor={editor} />
				<Threads editor={editor} />
			</div>
		</div>
	);
};