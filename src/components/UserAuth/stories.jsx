import { UserAuth } from ".";

export default {
  title: "UserAuth",
  component: UserAuth
};

export const Default = (args) => <UserAuth {...args} />;

export const WithUser = (args) => <UserAuth {...args} />;
WithUser.args = {
  user: "Genilson"
};

export const WithouUser = (args) => <UserAuth {...args} />;
