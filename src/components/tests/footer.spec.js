import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";


const mockNavigate = jest.fn();

jest.mock('react-router',() => ({

  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate
}));

describe ("FooterRender", () => {
  //Testando a renderização do componente Footer, renderizando e verificando os textos (Home e Contato).
  it("Teste render para o componente Footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });


})
