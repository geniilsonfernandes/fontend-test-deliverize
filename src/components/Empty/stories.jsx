import { Empty } from ".";

export default {
    title: "Empty",
    component: Empty
};

export const Default = (args) => <div style={{ display: "flex", justifyContent: "center" }}><Empty {...args} /></div>;

Default.args = {
    erroMessage: "não foi possivel carrega o produto"
}