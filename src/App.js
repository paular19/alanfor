import Logo from "./Assets/logoalanfor.png";
import Imgppal from "./Assets/petroleo.jpg"
import Imgcard1 from "./Assets/imgcard1.png"
import Imgcard2 from "./Assets/imgcard2.png"
import Imgcard3 from "./Assets/imgcard3.png"
import Imgcard4 from "./Assets/imgcard4.png"
import Imgcard5 from "./Assets/imgcard5.png"
import Imgcard6 from "./Assets/imgcard6.png"
import ImgseccionA from "./Assets/APILogo-liveblog-primary-debate-06262019.jpg"
import ImgseccionB from "./Assets/2005.i101.004_natural_resources_isometric.jpg"
import ImgseccionC from "./Assets/green_leaf_recycle_sign.jpg"
import Imgcamio from "./Assets/11b63269-b0eb-4dfd-a25d-85f49bb9759b.jpg"
import './App.css';
import Footer from "./components/Footer";

function App() { 
    return (
        <div className='container-body'>
            
            <div className='logo-container'>
            <img src= {Logo} alt="" className="logo"/>
            </div>


             <div className="seccion-uno"> 
            <div className="rectangulo-izq">
                <h1 className="titulo-ppal">Profundizando el futuro, impulsados por la experiencia.</h1>
            </div>

            <div className='img-ppal-container'>
            <img src= {Imgppal} alt="" className="img-ppal"/>
            </div>
             </div> 

            <div className="seccion-dos">
            
                <div className="titulo-seccion2">
                <h2 className="nuestra-identidad">NUESTRA</h2> <h2 className="nuestra-identidad2">IDENTIDAD</h2>
               </div>
               <div className="container-p">
               <p className="nuestra-id-txt">Somos una empresa argentina con profundas raíces familiares. Estamos orgullosos de ser una pieza fundamental en las provincias de Salta y Jujuy, donde se encuentra nuestra base de operaciones.</p>
               </div>
            </div>

            <div className="rectangulo-amarillo-vision">
            <div className="titulo-seccion2">
                <h2 className="nuestra-vision">NUESTRA</h2> <h2 className="nuestra-vision2">VISIÓN</h2></div>
                <p className="nuestra-vision-txt">Ser la empresa líder de servicios mineros, petroleros y de gas en la región, brindando servicios personalizados y de alta calidad, que satisfagan las necesidades específicas de cada cliente.</p>   
            </div>

            <h2 className="titulo-container-card">SERVICIOS</h2>
            <div className="container-cards">
                
                <div className="card">
                    <img src= {Imgcard1} alt="" className="img-card"/>
                    <p className="txt-card">Gestión de residuos</p>   
                </div>

                <div className="card">
                    <img src= {Imgcard2} alt="" className="img-card"/>
                    <p className="txt-card-">Asesoramiento técnico y consultoría</p>   
                </div>

                <div className="card">
                    <img src= {Imgcard3} alt="" className="img-card"/>
                    <p className="txt-card">Exploración y Perforación</p>   
                </div>

                <div className="card">
                    <img src= {Imgcard4} alt="" className="img-card"/>
                    <p className="txt-card">Recuperación de suelos</p>   
                </div>

                <div className="card">
                    <img src= {Imgcard5} alt="" className="img-card"/>
                    <p className="txt-card">Optimización de la producción</p>   
                </div>

                <div className="card">
                    <img src= {Imgcard6} alt="" className="img-card"/>
                    <p className="txt-card-">Mantenimiento de pozos y plataformas</p>   
                </div>

            </div>

            <div className="seccion-tres">
               <div className="rectangulo-filtro-card"></div>
               <div className="containerimgtxt-seccion3">
               <h2 className="nuestra-mision">NUESTRA</h2> <h2 className="nuestra-mision2">META</h2> 
               <p className="nuestra-meta-txt">Brindar servicios mineros, petroleros y de gas personalizados y de alta calidad que satisfagan las necesidades específicas de cada cliente, con un compromiso con la excelencia y el desarrollo sostenible.</p>
               </div>
            </div>


            <h2 className="titulo-container-card">¿PORQUÉ ELEGIRNOS?</h2>
            <div className="txt-cards">
                
            
            <div className="seccionA">
            <img src= {ImgseccionA} alt="" className="Imgseccion"/>
                    <div className="seccionA-txt">
                        <h2 className="seccionA-titulo">CUMPLIMIENTO DE NORMAS API</h2>
                        <p className="seccionA-p">Garantizamos que todos nuestros servicios y productos estén en pleno cumplimiento con las normas API. Somos una empresa que se adhiere a directrices rigurosas y estándares internacionales.</p> 
                    </div>  
            </div>

            <div className="seccionA">
            <img src= {ImgseccionB} alt="" className="ImgseccionB"/>
                    <div className="seccionA-txt">
                        <h2 className="seccionB-titulo">UTILIZAMOS TECNOLOGÍA DE PUNTA</h2>
                        <p className="seccionA-p">Utilizamos las últimas tecnologías para asegurar la eficiencia y efectividad de nuestras operaciones, permitiendo a nuestros clientes maximizar la productividad y reducir costos.</p> 
                    </div>  
            </div>

            <div className="seccionA">
            <img src= {ImgseccionC} alt="" className="Imgseccion"/>
                    <div className="seccionA-txt">
                        <h2 className="seccionB-titulo">SOSTENIBILIDAD Y RESPONSABILIDAD</h2>
                        <p className="seccionA-p">Estamos comprometidos con prácticas empresariales sostenibles y responsables, trabajando constantemente para minimizar nuestro impacto ambiental.</p> 
                    </div>  
            </div>

            </div>

            <h2 className="titulo-container-card">NUESTRO EQUIPO</h2>
            <div className="container-cards2">
                
                <div className="card">
                    <p className="txt-card2"></p>   
                </div>

                <div className="card">
                    <p className="txt-card2-"></p>   
                </div>

                <div className="card">
                    <p className="txt-card2"></p>   
                </div>
            </div>
           
        <Footer/>
        </div>
    );
  
}

export default App;
