import {Outlet,Link}from"react-router-dom";
export default function Menu() {
  return (
    <div className="menue">
      <ul>
        <li>
          <Link to="./Lilit">Lilit</Link>
        </li>
        <li>
        <Link to="./Zaruhi">Zaruhi</Link>
        </li>
        <li>
            <Link to="./Karine">Karine</Link>
          </li>
          <li>
            <Link to="./Verjine">Verjine</Link>
          </li>
          
          
        
      </ul>
      <Outlet/>
    </div>
  );
}