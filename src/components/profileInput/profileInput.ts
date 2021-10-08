import { SetPropsType } from './../../types/index';
import { Input } from '..';
import { createBlock } from '../../core/createBlock';
import { ValidationRules } from '../../types';

import './profileInput.scss';

const template = `
<div class="profile-input">
  {{#if isEdit}}
    <div class="input-with-buttons">
      <span class="edit-profile-cancel">cancel</span>
      <div data-component="profileInputComponent"></div>
      <span class="edit-profile-ok">ok</span>
    </div>
  {{else}}
    <p class="profile-label">{{ label }}:</p>
    <span class="profile-value-field {{#unless value}}profile-empty-field{{/unless}}">
      {{ value }}
    </span>
  {{/if}}
</div>
`;

type PropsType = {
  label: string;
  value?: string;
  setProfileProps?: (value?: string) => void;
  rules?: ValidationRules;
};

export const ProfileInput = (props: PropsType) => {
  const data = {
    isEdit: false
  };

  const components = {
    profileInputComponent: Input({
      value: props.value,
      placeholder: `Input new ${props.label}`,
      rules: props.rules
    })
  };

  const events = {
    onClick: (setProps: SetPropsType, props: any) => (e: Event) => {
      e.preventDefault();
      const { target } = e;
      if ((target as HTMLElement).classList.contains('profile-value-field')) {
        components.profileInputComponent.setProps({ value: props.value });
        setProps({ ...props, isEdit: true });
      } else if (
        (target as HTMLElement).classList.contains('edit-profile-ok')
      ) {
        const input = (
          target as HTMLElement
        ).previousElementSibling?.querySelector('input');
        props.setProfileProps && props.setProfileProps(input?.value);
        setProps({ ...props, isEdit: false, value: input?.value });
      } else if (
        (target as HTMLElement).classList.contains('edit-profile-cancel')
      ) {
        setProps({ ...props, isEdit: false, value: props.value });
      }
    }
  };

  return createBlock({ components, data, events, props, template });
};
