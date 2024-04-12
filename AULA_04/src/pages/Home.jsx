import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {

  const baseUsuarios = [{
    nome: 'Matheus',
    email: 'matheusfariasdelima@gmail.com',
    telefone: '95324-9951',
    imagem:"../img/Matheus"
  }]
  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo usuarios={baseUsuarios}/>
          <h2>Informações pessoais</h2>
          <Skills />
        </section>
        <ContactForm />
    </div>
  );
}

export default Home;