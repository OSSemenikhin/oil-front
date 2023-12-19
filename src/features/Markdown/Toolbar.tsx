import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { CreateLink } from '@mdxeditor/editor/plugins/toolbar/components/CreateLink';
import { InsertImage } from '@mdxeditor/editor/plugins/toolbar/components/InsertImage';
import { InsertTable } from '@mdxeditor/editor/plugins/toolbar/components/InsertTable';
import { InsertThematicBreak } from '@mdxeditor/editor/plugins/toolbar/components/InsertThematicBreak';
import { ListsToggle } from '@mdxeditor/editor/plugins/toolbar/components/ListsToggle';
import { InsertSandpack } from '@mdxeditor/editor/plugins/toolbar/components/InsertSandpack';
import { InsertFrontmatter } from '@mdxeditor/editor/plugins/toolbar/components/InsertFrontmatter';
import { DiffSourceToggleWrapper } from '@mdxeditor/editor/plugins/toolbar/components/DiffSourceToggleWrapper';

export default function Test() {
  return (
    <>
      <DiffSourceToggleWrapper>
        <UndoRedo />
        <BoldItalicUnderlineToggles />
        <CreateLink />
        <InsertImage />
        <InsertTable />
        <ListsToggle />
        <InsertThematicBreak />
        {/* <InsertFrontmatter /> */}
        {/* <InsertSandpack /> */}
      </DiffSourceToggleWrapper>
    </>
  );
}
