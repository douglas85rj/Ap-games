import {Link} from "react-router-dom"

const Navbar =() => {

    return (
        <nav>
<Link to="/">Home</Link><br/>
<Link to="/contato">Contato</Link>
        </nav>
    )
}

export default Navbar;