import  {Link} from 'react-router-dom';

export default function Nav() {

  


  return (
    <div>
      <nav className='navbar'>
        <ul className='list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">The Brand</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link>Blog</Link></li>
        </ul>
      </nav>
    </div>
  )
}
