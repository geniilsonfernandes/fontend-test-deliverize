import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/test/renderWithTheme";

import { Product } from ".";

const mock = {
  url: "picanha.jpg",
  name: "Picanha Cheddar Bacon",
  price: 10.1,
  description: "Hambúrguer de picanha"
};

describe("<Product />", () => {
  it("should render Product component with his props", () => {
    renderWithTheme(<Product {...mock} />);

    expect(screen.getByText(mock.name)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: mock.description })).toHaveAttribute(
      "src",
      mock.url
    );
    expect(screen.getByText("Hambúrguer de picanha")).toBeInTheDocument();
    expect(screen.getByText(`R$ 10,10`)).toBeInTheDocument();
  });
  it("should promotional price", () => {
    renderWithTheme(<Product {...mock} promotionalPrice={9.5} />);

    expect(screen.getByText(`R$ 9,50`)).toBeInTheDocument();
    expect(screen.getByText(`R$ 10,10`)).toBeInTheDocument();
  });
  it("should render empty icon when no has url photo", () => {
    renderWithTheme(<Product {...mock} url={null} promotionalPrice={9.5} />);

    expect(
      screen.getByTitle("Foto do produto não encontrada")
    ).toBeInTheDocument();
  });
});
