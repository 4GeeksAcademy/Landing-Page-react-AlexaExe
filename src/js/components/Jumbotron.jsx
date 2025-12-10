const Jumbotron = () => {
    return (

        <div className="container">
            <div className="bg-light p-5 rounded-3 border shadow-sm"> {/* bg-light para fondo gris, p-5 para padding, rounded-3 para esquinas, border para borde, shadow para sombra */}
                <div className="container-fluid py-5"> {/* container-fluid para ancho completo */}
                    <h1 className="display-5 fw-bold">¡Bienvenido a GatitosConAmor.com!</h1> {/* display-5 y fw-bold para título grande y negrita */}
                    <p className="col-md-8 fs-4">
                        Este es un Jumbotron simulado usando clases de utilidad de Bootstrap 5.
                        ¡Es muy versátil y personalizable!
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Más Información
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;