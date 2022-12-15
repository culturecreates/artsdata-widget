import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function TabLink({ to, title, exact }) {
     const isActive = useRouteMatch({path: to, exact: exact});
     const className = isActive ? 'nav-link active' : 'nav-link';

     return (
        <li role="presentation" className='nav-item'>
            <Link className={className} to={to}>
                {title}
            </Link>
        </li>);
}

