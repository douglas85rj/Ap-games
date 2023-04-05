import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
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

// Verificando se os Links Home e Contato estão abrindo corretamente as suas respectivas páginas.
it("Validando os Links Home e Contato no click e abertura", () => {

  
  render(
    <BrowserRouter>
  
      <Footer />
    
    </BrowserRouter>
  )
  const btn = screen.getByText("Home")

  fireEvent(btn);

  expect(mockNavigate).toHaveBeenCalled();
  expect(mockNavigate).toHaveBeenNthCalledWith("/");

  

})

})
