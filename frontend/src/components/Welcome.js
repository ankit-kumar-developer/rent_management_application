import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>

            <h1>Welcome to page</h1>
            <div className="buttons">
                <Link to="/login"> <button>Go to admin</button></Link>
                <Link to="/admin_dashboard"><button>Go to resident</button></Link>
            </div>

        </div>
    )
}

export default Welcome