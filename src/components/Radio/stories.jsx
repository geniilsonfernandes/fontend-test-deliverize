import { Radio } from ".";

export default {
  title: "delivery/Radio",
  component: Radio
};

export const Default = () => (
  <div>
    <Radio label="sim" labelFor="sim" name="talheres" value="sim" />
    <Radio label="não" labelFor="nao" name="talheres" value="nao" />
  </div>
);
