import { PopupModel } from ".";

export default {
  title: "PopupModel",
  component: PopupModel
};

export const Default = (args) => (
  <PopupModel {...args}>
    <div style={{ padding: "16px" }}>this is a noticication</div>
  </PopupModel>
);

Default.args = {
  label: "Adicionado com Sucesso"
};
