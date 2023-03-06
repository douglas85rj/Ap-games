import { Link } from "react-router-dom";
import Section from "../components/Section";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Button as="a" href="/">
        Home
      </Button>
      <Button as="a" href="/contato">
        Contato
      </Button>
     
    </div>
  );
};

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export default Footer;
