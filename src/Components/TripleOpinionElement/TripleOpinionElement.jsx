import "./TripleOpinionElement.css"

function TripleOpinionElement(props) {

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
    let sizeClass = props.sizeClass ? props.sizeClass : "col-12";
    let auxClass = props.auxClass ? props.auxClass : "col-12";


    sizeClass += " opinion-container"

    return (

        <div className={auxClass}>
            <div className="row">
                <div className={sizeClass}>
                    <div className="row">
                        <div class="col-12 opinion-title">
                            <a href="#">
                                <h3>OPINIÓN</h3>
                                <hr />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-12 col-md-4 opinion-element-container">
                            <a href="#" class="opinion-element-title">
                                Ingenuo Huijsen, pletórico Militao
                            </a>
                            <div class="opinion-image-container">
                                <div class="opinion-element-text">
                                    <span class="author-pre">
                                        POR
                                    </span>
                                    <span class="author">
                                        Santiago Segurola
                                    </span>
                                    <span class="comments">

                                    </span>
                                </div>
                                <div class="opinion-image">
                                    <div class="opinion-image-div"
                                        style={{backgroundImage: `url("https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 opinion-element-container">
                            <a href="#" class="opinion-element-title">
                                Ingenuo Huijsen, pletórico Militao
                            </a>
                            <div class="opinion-image-container">
                                <div class="opinion-element-text">
                                    <span class="author-pre">
                                        POR
                                    </span>
                                    <span class="author">
                                        Santiago Segurola
                                    </span>
                                    <span class="comments">

                                    </span>
                                </div>
                                <div class="opinion-image">
                                    <div class="opinion-image-div"
                                        style={{backgroundImage: `url("https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col-12 col-md-4 opinion-element-container">
                            <a href="#" class="opinion-element-title">
                                Ingenuo Huijsen, pletórico Militao
                            </a>
                            <div class="opinion-image-container">
                                <div class="opinion-element-text">
                                    <span class="author-pre">
                                        POR
                                    </span>
                                    <span class="author">
                                        Santiago Segurola
                                    </span>
                                    <span class="comments">

                                    </span>
                                </div>
                                <div class="opinion-image">
                                    <div class="opinion-image-div"
                                        style={{backgroundImage: `url("https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true")`}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default TripleOpinionElement;