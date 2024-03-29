import {
  ComponentMeta,
  ComponentStory,
  Meta,
  StoryObj,
} from '@storybook/react';
import React from 'react';
import LabeledCheckboxMaterialUi from '../src/LabeledCheckboxMaterialUi';

const style: React.CSSProperties = {
  height: 20,
};

const styles: { [key: string]: React.CSSProperties } = {
  checkbox: {
    color: '#008000',
  },
  label: {
    color: '#888888',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

const showSelectedValue = (id: string) => (checked: boolean) =>
  (document.getElementById(id)!.textContent = checked
    ? 'selected'
    : 'not selected');

const meta: Meta<typeof LabeledCheckboxMaterialUi> = {
  title: 'LabeledCheckboxMaterialUi',
  component: LabeledCheckboxMaterialUi,
} as Meta<typeof LabeledCheckboxMaterialUi>;
export default meta;
type Story = StoryObj<typeof LabeledCheckboxMaterialUi>;

export const WithLabel = () => (
  <div>
    <LabeledCheckboxMaterialUi
      label="I like it"
      onChange={showSelectedValue('lcbmui1')}
    />
    <div style={style} />
    Selected value: <span id="lcbmui1" />
  </div>
);

export const WithValue = () => (
  <div>
    <LabeledCheckboxMaterialUi
      label="I like it"
      value="aValue"
      onChange={showSelectedValue('lcbmui2')}
    />
    <div style={style} />
    Selected value: <span id="lcbmui2" />
  </div>
);

export const Controlled = () => (
  <div>
    <LabeledCheckboxMaterialUi
      label="Checked"
      checked={true}
      onChange={showSelectedValue('lcbmui3')}
    />
    <LabeledCheckboxMaterialUi
      label="Unchecked"
      checked={false}
      onChange={showSelectedValue('lcbmui3')}
    />
    <div style={style} />
    Selected value: <span id="lcbmui3" />
  </div>
);

export const Disabled = () => (
  <div>
    <LabeledCheckboxMaterialUi
      label="Disabled"
      disabled={true}
      onChange={showSelectedValue('lcbmui4')}
    />
    <div style={style} />
    Selected value: <span id="lcbmui4" />
  </div>
);

export const StyledWithClasses: ComponentStory<
  typeof LabeledCheckboxMaterialUi
> = () => {
  const css = `
    .class-checkbox {
      padding: 20px !important;
    }
    
    .class-label {
      font-weight: bold;
      font-style: italic;
    }`;
  const headEl = document.head || document.getElementsByTagName('head')[0];
  const styleEl = document.createElement('style');
  headEl.appendChild(styleEl);
  styleEl.appendChild(document.createTextNode(css));

  return (
    <div>
      <LabeledCheckboxMaterialUi
        label="Checkbox and label styled"
        classNameCheckbox="class-checkbox"
        classNameLabel="class-label"
        onChange={showSelectedValue('lcbmui5')}
      />
      <div style={style} />
      Selected value: <span id="lcbmui5" />
    </div>
  );
};

export const StyledWithStyle = () => (
  <div>
    <LabeledCheckboxMaterialUi
      label="Checkbox and label styled"
      styleCheckbox={styles.checkbox}
      styleLabel={styles.label}
      onChange={showSelectedValue('lcbmui6')}
    />
    <div style={style} />
    Selected value: <span id="lcbmui6" />
  </div>
);
