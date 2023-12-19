import dynamic from "next/dynamic";
import { MDXEditor } from '@mdxeditor/editor/MDXEditor';
import { headingsPlugin } from '@mdxeditor/editor/plugins/headings';
import { listsPlugin } from '@mdxeditor/editor/plugins/lists';
import { quotePlugin } from '@mdxeditor/editor/plugins/quote';
import { thematicBreakPlugin } from '@mdxeditor/editor/plugins/thematic-break';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar'
import '@mdxeditor/editor/style.css'
const Test = dynamic(() => import('./Toolbar'), { ssr: false });

export default function Markdown() {
  return (
    <MDXEditor markdown='# Hello world' plugins={[
      toolbarPlugin({
        // toolbarContents: () => (<></>)
        // toolbarContents: () => (<> <BoldItalicUnderlineToggles /></>)
        // toolbarContents: () => (<div> <UndoRedo /></div>)
        toolbarContents: () => (<> <Test /></>)
        // toolbarContents: () => (<> <UndoRedo /><BoldItalicUnderlineToggles /></>)
      }),
      headingsPlugin(),
      listsPlugin(),
      quotePlugin(),
      thematicBreakPlugin()
    ]} />
  );
}
