import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomeItem = ({item, index}) => {
    const {titulo, texto, img} = item
    const navigate = useNavigate();
    useEffect(() => {
      // Desplázate al inicio de la página después de la redirección
      window.scrollTo(0, 0);
    }, []);

    const styles =index % 2 === 0 ? {order: 1, color: "#F2BD67", display:"flex",justifyContent: 'center',flexDirection: 'column'} : {order: -1, color: "black",display:"flex",justifyContent: 'center',flexDirection: 'column',
  
    }

    return ( 
        <div className="row my-5">
          <div className="col-lg-6 ">
            <img src={img} alt="Producto 1" style={{objectFit:"cover", width:"100%",borderRadius: '40px'}}/>
          </div>
          <div className="col-lg-6 home-item-info " style={styles}>
            <p className="home-item-title my-2" >{titulo}</p>
            <p className="home-item-texto my-3" dangerouslySetInnerHTML={{ __html: texto }} /> 
            <button className="home-item-btn my-3" onClick={() => navigate("/contacto/")}>Unete a nosotros para iluminar un futuro educativo mas brillante y sostenible</button>
          </div>
        </div>
     );
}
 
export default HomeItem;