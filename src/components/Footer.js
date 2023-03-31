import { Link } from "react-router-dom";
import Section from "../components/Section";
import styled from "styled-components";
import "../App.css";


const Footer = () => {
  return (
    
<div>
            <ul>
      <li>
      <Button as="a" href="/">
        Home
      </Button>
      </li>
      <li>
      <Button as="a" href="/contato">
        Contato
      </Button>
     </li>
    </ul>
</div>
    
  );
};

const Button = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 1em;
  margin: 9px;
  padding: 15px;
  border: 6px solid palevioletred;
  border-radius: 3px;
display:block;
text-align: center;
margin-left: auto;
  margin-right: auto;
width:30%;
text-decoration:none;
  
  
`;

export default Footer;
