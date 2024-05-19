import Filters from '../../filters/Filters'
import './Header.css'
export default function Header({changeFilter}) {
    return (
        <header className="header">
            <h1> React Shop </h1>
            <Filters onChange={changeFilter}/>
        </header>
    )
}