import { Link } from 'react-router-dom'

const Missing = () => {
    return(
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p> Please try again later! </p>
            <p>
                <Link to='/'>Visit our home page!</Link>
            </p>
        </main>
    )
}

export default Missing