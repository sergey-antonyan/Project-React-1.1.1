import  {Link} from 'react-router-dom';


export  function Blog(){
  return(
    <div> 
    <h1>   I'm Blog</h1>
    </div>
  )
}



export default function Nav() {

  


  return (
    <div>
      <nav className='navbar'>
        <ul className='list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">The Brand</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
  )
}
