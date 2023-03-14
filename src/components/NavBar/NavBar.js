import './NavBar.css'

const NavBar =()=>{
    return(
        <nav className="NavBar">
            <h1>Venta de Mates</h1>
            <div>
                <button className='btn btn-outline-success'>Mates</button>
                <button className='btn btn-outline-success'>Lámparas</button>
                <button className='btn btn-outline-success'>Juguetes</button>
            </div>
        </nav>
    )
}
export default NavBar