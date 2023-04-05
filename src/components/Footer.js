
import styled from "styled-components";
import "../App.css";


const Footer = () => {
  return (
    <div>
      <ul>
        <li>

        <Button  as="a" href="/">
            Home
          </Button>
         
        </li>
        <li>
          <Button  as="a" href="/contato">
            Contato
          </Button>
        </li>
     
      </ul>
      
    </div>
  );
};

const Button = styled.button`
  display: auto;
  color: palevioletred;
  font-size: 1em;
  margin: 9px;
  padding: 15px;
  border-radius: 3px;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 27%;
  text-decoration: none;
  border-radius: 1em;
  border: 4px solid transparent;
`;


export default Footer;
