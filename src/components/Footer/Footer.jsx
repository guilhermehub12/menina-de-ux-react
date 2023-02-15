import "./Footer.css"

function Footer() {
  return (
    <footer class="footer text-center text-lg-start text-muted">
      <div class="container text-center text-md-start mt-4">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <div class="logo">
              <img src="src/assets/img/header-logo.webp" alt="" class="img-fluid" />
            </div>
            <p class="text-p">Ajudando meninas como eu</p>
            <div class="ods">
              <p class="text-ods">ODS apoiadas:</p>
              <a href="https://brasil.un.org/pt-br/sdgs/4" target="_blank">
                <img
                  class="img-fluid"
                  src="src/assets/img/ods-4.webp"
                  alt="ods 4 - educação de qualidade"
                />
              </a>
              <a href="https://brasil.un.org/pt-br/sdgs/5" target="_blank">
                <img
                  class="img-fluid"
                  src="src/assets/img/ods-5.webp"
                  alt="ods 5 - igualdade de gênero"
                />
              </a>
            </div>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Projetos</h6>
            <p>
              <a href="/criando-seu-case/index.html" class="links">
                Crie seu Case
              </a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Sobre a <br></br>Menina de UX
            </h6>
            <p>
              <a href="/sobre.html" target="_blank" class="links">
                Conheça a iniciativa
              </a>
            </p>
            <p>
              <a href="/becabelin.html" target="_blank" class="links">
                Quem criou
              </a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Redes sociais</h6>
            <p class="links">
              <a
                href="https://www.instagram.com/meninadeux"
                class="links"
                target="_blank"
              >
                <i class="fa-brands fa-instagram me-2"></i>Instagram
              </a>
            </p>
            <p class="links">
              <a
                href="https://www.LinkedIn.com/company/meninadeux"
                class="links"
                target="_blank"
              >
                <i class="fa-brands fa-LinkedIn me-2"></i>LinkedIn
              </a>
            </p>
            <p class="links">
              <a href="https://t.me/meninadeux" class="links" target="_blank">
                <i class="fa-brands fa-telegram me-2"></i>Telegram
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="text-center p-4 copyright">
        Feito com 💙 por <span>Menina de UX</span>
        <p class="credits">
          Design e código por{" "}
          <a href="becabelin.html" target="_blank">
            Rebeca Belin
          </a>
        </p>
        <p class="credits">Ilustrações por Storyset</p>
      </div>
    </footer>
  );
}

export default Footer;