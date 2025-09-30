import { Link } from 'react-router-dom';
import "./nav.css";

function Navigation() {
   return (
      <>
         <section className="container-nav">
            <nav className="nav-content">
               <div className="logo"><h1>NexusNotes</h1></div>
               <div className="history">
                  <button>
                     <a>Contos</a>
                  </button>
               </div>
               <div className="logoff">Logoff</div>
            </nav>
         </section>
      </>
   )
}
export default Navigation