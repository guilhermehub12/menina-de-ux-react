import "./Hero.css";

function Hero() {

  return (
    <section id="hero" className="hero">

        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">Ajudando meninas<br></br> como eu</h1>
                    <p data-aos="fade-up" data-aos-delay="400">Encontre os melhores cursos e processos seletivos na
                        área de tecnologia e ainda aprenda sobre o mundo do UX Design!</p>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <div className="text-center text-lg-start">
                            <a href="cursos.html" className="btn-descobrir-cursos">Descobrir cursos</a>
                            <a href="bootcamps.html" className="btn-descobrir-processos">Processos Seletivos</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                    <img src="src/assets/img/mulher-estudando.webp" className="img-fluid" alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero;
