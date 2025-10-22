import "./SingleOpinionCard.css"

function SingleOpinionCard(props) {

    /*
        let auxClass;

        if(props.auxClass != undefined && props.auxClass != null){
            auxClass = props.auxClass;
        } else {
            auxClass = "col-12";
        }

        ES IGUAL A :
    */

    /* 
        Parcialmente igual a :

        let auxClass = props.auxClass != undefined && props.auxClass != null ? props.auxClass : "col-12";
        let auxClass = props.auxClass ? props.auxClass : "col-12";
    */
    let auxClass = props.auxClass ? props.auxClass : "col-12";

    return (

        <div className={auxClass}>
            <div className="opinion-element-header">
                <div className="row">
                    <div className="col-12 opinion-title2">
                        <h6>OPINIÓN</h6>
                    </div>
                </div>
                <div className="opinion-title-container">
                    <h2 className="opinion-title">El show de Vini</h2>
                    <div className="opinion-author">
                        <span className="author-prefix">POR</span>
                        <span className="author-name">TOMÁS RONCERO</span>
                    </div>
                </div>
            </div>
            <div className="author-image">
                <img src="https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true"
                    alt="Tomás Roncero"></img>
            </div>
        </div>

    );

}

export default SingleOpinionCard;