import { CutlerySelect } from ".";

export default {
  title: "delivery/CutlerySelect",
  component: CutlerySelect
};

export const Default = (args) => (
  <CutlerySelect {...args} onSelect={() => {}} />
);
