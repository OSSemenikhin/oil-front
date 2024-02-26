import { useState } from 'react';
import {
  SimpleForm,
  TextInput,
  FunctionField,
  SelectInput,
  NumberInput,
  required,
  Toolbar,
  SaveButton,
  DeleteButton,
} from 'react-admin';
import TurndownService from 'turndown';
import Markdown from '../../../../features/Markdown';
import { TAboutRecord } from '@/widgets/admin/model/types';
import { marked } from 'marked';

type TAboutFormProps = {
  type: 'edit' | 'create';
  record?: {
    id: string | number,
  } & TAboutRecord;
};

export default function AboutForm({ type, record }: TAboutFormProps) {
  const startValues = record ? { ...record, method: type } : {
    method: type,
    id: '',
    menu: '',
    route: '',
    topBar: 0,
    content: '',
  };
  const [values, setValues] = useState(startValues);

  const turndownService = new TurndownService();

  const handleMarkdownChange = async (value: string) => {
    const content = await marked.parse(value);
    setValues({ ...values, content: content });
  };

  const handleInput = (value: any, field: 'title' | 'href' | 'order') => {
    setValues((prevValues: any) => {
      const newValues = { ...prevValues };
      newValues[field] = value.nativeEvent.target.value;
      return newValues;
    });
  }

  const toolbar = () => {
    return (
      <Toolbar>
        <SaveButton
          style={{ marginRight: 'auto' }}
          alwaysEnable
          label="Save"
          type="submit"
          variant="contained"
          color="primary"
        />
        <DeleteButton />
      </Toolbar>
    );
  }

  return (
    <SimpleForm record={values} toolbar={toolbar()}>
      <TextInput
        onChange={(value: any) => handleInput(value, 'title')}
        source="title"
        label="Название в меню"
        validate={required()}
      />
      <TextInput
        onChange={(value: string) => handleInput(value, 'href')}
        source="href"
        label="Путь в адресной строке"
        validate={required()}
      />
      <TextInput
        onChange={(value: string) => handleInput(value, 'order')}
        source="order"
        label="Порядок"
        validate={required()}
      />
      <SelectInput
        source="topBar"
        label="Отображать в шапке"
        validate={required()}
        choices={[
          { id: 0, name: 'нет', default: true },
          { id: 1, name: 'да' },
        ]}
      />
      <SelectInput
        source="published"
        label="Опубликовано"
        validate={required()}
        choices={[
          { id: 0, name: 'нет', default: true },
          { id: 1, name: 'да' },
        ]}
      />
      {type === 'edit' && (
        <FunctionField
          render={(record: TAboutRecord) => (
            <Markdown
              value={turndownService.turndown(record.content)}
              onChange={handleMarkdownChange}
            />
          )}
        />
      )}
      {type === 'create' && <Markdown value={''} onChange={handleMarkdownChange} />}
    </SimpleForm>
  );
}
