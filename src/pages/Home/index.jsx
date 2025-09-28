import Navigation from "../Nav"
import Footer from "../Footer"
import Notes from "../Notes"

function Home() {
   return (
      <>
         <section>
            <div className="container-home">
               <Navigation />
               <div className="content">
                  <div className="search-maping">
                     <Notes/>
                  </div>
               </div>
               <Footer />
            </div>
         </section>
      </>
   )
}
export default Home