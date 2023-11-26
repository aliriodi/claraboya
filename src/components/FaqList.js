import { Layout } from "./Layout";
import banner from "../assets/claraboya/IsometraLN.jpg";
import { faqs_mock } from "../mocks/faqs_mock";
import FaqItem from "./FaqItem";
import { useEffect } from "react";
import underc from "..//assets/claraboya/underconstruction.jpg"

const Faq = () => {
  const titulo = "En construcción";
  useEffect(() => {
    // Desplázate al inicio de la página después de la redirección
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout  titulo={titulo}>
     <img src={underc} alt='underc' style={{}}></img>
      {/* {faqs_mock.map(data => (<FaqItem key={data.id} info={data}/>))} */}
    </Layout>
  );
};

export default Faq;

