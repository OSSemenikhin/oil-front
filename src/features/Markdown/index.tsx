import dynamic from "next/dynamic";
import { MDXEditor } from '@mdxeditor/editor/MDXEditor';
import {
  headingsPlugin,
  toolbarPlugin,
  quotePlugin,
  thematicBreakPlugin,
  frontmatterPlugin,
  diffSourcePlugin,
  imagePlugin,
  tablePlugin,
  listsPlugin,
  sandpackPlugin,
  ToMarkdownOptions,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
const Toolbar = dynamic(() => import('./Toolbar'), { ssr: false });

export default function Markdown() {
  const DEFAULT_MARKDOWN_OPTIONS: ToMarkdownOptions = {
    listItemIndent: 'one'
  }

  return (
    <MDXEditor markdown='# Hello world' plugins={[
      toolbarPlugin({
        // toolbarContents: () => (<></>)
        // toolbarContents: () => (<> <BoldItalicUnderlineToggles /></>)
        // toolbarContents: () => (<div> <UndoRedo /></div>)
        toolbarContents: () => (<> <Toolbar /></>)
        // toolbarContents: () => (<> <UndoRedo /><BoldItalicUnderlineToggles /></>)
      }),
      // sandpackPlugin(),
      imagePlugin(),
      tablePlugin(),
      diffSourcePlugin(),
      frontmatterPlugin(),
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin()
    ]} />
  );
}
