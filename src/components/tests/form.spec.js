import Form from '../Form'
import {render, screen} from '@testing-library/react'

test("validar valores do placeholder",() => { 

render(<Form />)
const inputName = screen.getByPlaceholderText('Nome')
const inputEmail = screen.getByPlaceholderText('email@seuemail.com')

expect(inputName).toHaveAttribute("placeholder", "Nome")
expect(inputEmail).toHaveAttribute("placeholder", "email@seuemail.com")


})

