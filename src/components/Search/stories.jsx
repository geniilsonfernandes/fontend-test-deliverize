import { Search } from ".";

export default {
  title: "Search",
  component: Search
};

export const Default = (args) => <Search {...args} />;

Default.args = {
  onSubmit: () => {}
};
