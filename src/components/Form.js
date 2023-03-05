import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"
import Section from "./Section";

export function Form() {

    
    return (

   
        
    <div className="form-contato">
        

     <Section title="Envie sua mensagem" >
<form className="conato" method="post" action="https://getform.io/f/97332049-19ab-4e2d-bd51-90d0accb9b30"> 
<div className="row">
<Input type="text" name="fullname" id="nome" placeholder="Nome" required className="field" minLength={2} maxLength={36}/>
</div>
<div className="row">
<Input type="email" name="email" id="email" placeholder="email" required className="field" />
</div>
<div className="row">
<Input type="tel" name="tel" id="tel" placeholder="Telefone (21) 99999-9999" className="field" pattern="\([0-9][0-9]\) 9?([0-9]{4}-[0-9]{4})"/>
</div>
<div className="row">
<TextArea name="mensagem" id="mensagem" required rows={3} className="field" minLength={12} maxLength={256} placeholder="Seu texto com no mínimo 12 e no máximo 256 caracteres."/>
</div>
<Button>Enivar</Button> 
</form>
</Section>   
</div>
         
)}

const Input = styled.input.attrs(props => ({
        // we can define static props
        type: "text",
      
        // or we can define dynamic ones
        size: props.size || "1em",
      }))`
      width: 100%;
        color: palevioletred;
        font-size: 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
      
        /* here we use the dynamically computed prop */
        margin: ${props => props.size};
        padding: ${props => props.size};
      `;
    
 const TextArea =styled.input.attrs(props => ({

    type: "text",    
    
    size: props.size || "1em",
  }))`
  width: 100%;
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    
    
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
    
`;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
