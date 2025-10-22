import "./SideNewsCard.css"

function SideNewsCard(props) {

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
            <div className="row">
                <div className="col-5">
                    <div className="card-image-container">
                        <a href="#">
                            <div
                                style={{ backgroundImage: `url("https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true")` }}>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-7">
                    <div className="card-category-container">
                        <a href="#">
                            BALÓN DE ORO
                        </a>
                    </div>
                    <div className="card-text-container">
                        <a href="#">
                            Al Madrid le duelen Weir y Linda
                        </a>
                    </div>
                    <div className="news-author">
                        <span>MARTA GARCÍA</span>
                        <span className="comments-count">8</span>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default SideNewsCard;