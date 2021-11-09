import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
      <header>
        <div className='container'>
          <div className='inner-content'>
            <div className='brand'>
              <Link to='/'>DANH SÁCH PHIM</Link>
            </div>
            <ul className='nav-links'>
              <li>
                <Link to='/'>DANH SÁCH</Link>
              </li>
              <li>
                <Link to='/watched'>ĐÃ XEM</Link>
              </li>
              <li>
                <Link to='/add' className='btn btn-main'>+ THÊM</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}
 