import './Banner.css'

function Banner(props){
    return(
        <header>
        <h1 className="titulo-banner">{props.textoBanner}</h1>
        <p>Paragrafo do meu banner</p>
        </header>
    )
}

export default Banner