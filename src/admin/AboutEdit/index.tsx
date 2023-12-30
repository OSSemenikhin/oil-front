import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, useEditController, useGetOne } from 'react-admin';
import TurndownService from 'turndown';
import Markdown from 'features/Markdown';

export default function AboutEdit() {
  const { id } = useParams();
  const { data: about, isLoading, error } = useGetOne('about', { id: id });

  const turndownService = new TurndownService();
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="menu" />
        <TextInput source="route" />
        <Markdown value={about && about.content ? turndownService.turndown(about.content) : ''} />
        <NumberInput source="topBar" />
        <DateInput source="created_at" />
        <DateInput source="updated_at" />
      </SimpleForm>
    </Edit>
  );
};
