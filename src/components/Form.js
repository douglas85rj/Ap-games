import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import "../App.css";


export default function Form() {
  return (
    
    <div>
      <form
        className="conato"
        method="post"
        action="https://getform.io/f/97332049-19ab-4e2d-bd51-90d0accb9b30"
      >
        <div>
          <Input
            type="text"
            name="fullname"
            id="nome"
            placeholder="Nome"
            required
            className="field"
            minLength={2}
            maxLength={36}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@seuemail.com"
            required
            className="field"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Telefone (21) 99999-9999"
            className="field"
            pattern="\([0-9][0-9]\) 9?([0-9]{4}-[0-9]{4})"
          />
        </div>
        <div>
          <TextArea
            name="mensagem"
            id="mensagem"
            required
            rows={3}
            className="field"
            minLength={12}
            maxLength={256}
            placeholder="Seu texto com no mínimo 12 e no máximo 256 caracteres."
          />
        </div>
        <Button>Enivar</Button>
      </form>
    </div>
    
  );
}

const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  width: 40%;  
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 10px 20px;
  margin: auto;
  margin-bottom: 6px;
  margin-top: 20px;
  
  display:inline;  
  display:block;


`;

const TextArea = styled.input.attrs((props) => ({
  type: "text",

  size: props.size || "1em",
}))`
  width: 40%;
  height: 150px;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: auto;
  display:inline;  
 display:block;
 margin-top: 20px;

  
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  display:block;
  margin-top:20px;
  margin-bottom: 90px;

`;
