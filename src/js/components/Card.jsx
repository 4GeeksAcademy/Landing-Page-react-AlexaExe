const Card = ({raza}) => {
    return (

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
            <div class="card" style={{width: "18rem"}}>
                <img src="https://cataas.com/cat" class="card-img-top" alt="cat" />
                <div className="card-body">
                    <h5 class="card-title">{raza}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>

        </div>
        
    );
};

export default Card;