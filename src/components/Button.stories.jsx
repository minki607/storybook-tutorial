import Button from "./Button";

/* -------------------------------------------------------------------------- */

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Button 컴포넌트는 앱내에서 사용될 커스텀 버튼으로, 아웃라인 그리고 아이콘과 함께 사용가능함",
      },
    },
  },
  argTypes: {
    rounded: {
      description: "버튼 radius 여부",
    },

    icon: {
      decription: "버튼 좌측에 추가할 아이콘 이름",
    },

    width: {
      description: "버튼의 너비",
    },
    height: {
      description: "버튼의 높이 ",
    },
    children: {
      description: "버튼에 삽입될 텍스트 (텍스트 노드)",
    },
    isLoading: {
      description: "로딩 상태 여부 ",
    },
    disabled: {
      description: "버튼의 비활성화 여부",
    },
  },
};

/* -------------------------------------------------------------------------- */

const Template = (args) => <Button {...args} />;

export const ButtonDefaultIcon = Template.bind({});
export const ButtonLoading = Template.bind({});
export const ButtonDisabled = Template.bind({});

ButtonDefaultIcon.args = {
  icon: "home",
  children: "코딩마차",
};

ButtonLoading.args = {
  isLoading: true,
};

ButtonDisabled.args = {
  children: "비활성화",
  disabled: true,
};
