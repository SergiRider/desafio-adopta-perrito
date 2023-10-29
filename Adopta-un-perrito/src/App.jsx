import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
import MyCards from './assets/components/MyCards';
import Footer from './assets/components/Footer';


function App() {
const header= "Adopta un perrito"

  return (
    <>
      <body className='body'>
      <div className="header">
      <Header/>
      <h1>{header}</h1>
      </div>

      <main className="gallery">
      <MyCards  
      image="https://picsum.photos/200"
      name= "Emilio"
      description="Simpatico y guardian"
      tagColor="success"
      tag="Labradudu"
      />
    <MyCards  
      image="https://picsum.photos/200"
      name= "Claudio"
      description="No llevarlo seria un error"
      tagColor="warning"
      tag="akinota"
      />
<MyCards  
      image="https://picsum.photos/200"
      name= "Josefa"
      description="Nunca mas estaras solo "
      tagColor="secondary"
      tag="chiguagueño"
      />
      <MyCards  
      image="https://picsum.photos/200"
      name= "Josefa"
      description="Nunca mas estaras solo "
      tagColor="primary"
      tag="kilterri"
      />
     
      </main>

      <div className="footer"><Footer />
      </div>
      </body>
      

    </>
  )
}

export default App
