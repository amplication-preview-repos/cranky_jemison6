import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserWordTitle } from "../userWord/UserWordTitle";

export const WordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="definition" multiline source="definition" />
        <TextInput label="word" source="word" />
        <ReferenceArrayInput
          source="userWords"
          reference="UserWord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserWordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
