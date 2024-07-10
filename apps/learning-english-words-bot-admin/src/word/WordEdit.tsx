import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserWordTitle } from "../userWord/UserWordTitle";

export const WordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
