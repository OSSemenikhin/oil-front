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
const Toolbar = dynamic(() => import('./ui/Toolbar'), { ssr: false });

type TMarkDownProps = {
  value: string;
  onChange?: (value: string) => void;
}

export default function Markdown({ value, onChange }: TMarkDownProps) {
  return (
    <>
      <MDXEditor
        onChange={(value: string) => onChange && onChange(value)}
        contentEditableClassName="prose"
        markdown={value}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (<> <Toolbar /></>)
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
      <div>

      </div>
    </>
  );
}
