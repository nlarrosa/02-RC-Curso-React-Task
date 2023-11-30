import { CustomBanner } from './components/banners/CustomBanner';
import { NavBar } from './components/navbar/NavBar';
import './styles/index.css';



const App = () => {
 
  
  return (
    <>
        <NavBar />
        <CustomBanner />
        <div className="container" id="featured-3">
            <div className="row py-5">
                <div  className='col-sm-3 gy-3 gx-3'>
                    <div className="card" style={{ width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title ">Tarea N°: 1</h5>
                            <p className="card-text"> DESCRIPCION  </p>
                            <button 
                                type='button' 
                                className="btn btn-sm btn-danger"
                                onClick={() => {}}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 col-5">
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Agregar una tarea"
                    // value={}
                    onChange={() => {}}
                />
            </div>
            <div className="mb-3 col-5">
                <button 
                    className='btn btn-success'
                    onClick={() => {}}
                >
                    AGREGAR
                </button>
            </div>
        </div>
    </>
  );
}

export default App
