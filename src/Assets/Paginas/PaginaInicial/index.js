import Banner from "../../../Componets/Banner/Index";

export default function PaginaInicial () {
    const fontSize = "32px"
    const textAlign = "center"
    
    return (
        <div>
            <Banner/>
            <h1 style={{fontSize:fontSize, textAlign:textAlign}} > Obrigado por todo conhecimento dado</h1>
        </div>
    )
}