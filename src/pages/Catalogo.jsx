import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Header from "../components/Header";
import "../styles/catalogo.css";

function Catalogo() {
  const produtos = [
    {
      imagem: "/images/examples/1-pc.png",
      nome: "Computador PC Gamer Completo Tob Intel Core I7 SSD480GB 16gb...",
    },
    {
      imagem: "/images/examples/2-pc.png",
      nome: "PC Gamer, Intel Core Ultra 7 265K, GeForce RTX 5070 12GB...",
    },
    {
      imagem: "/images/examples/3-pc.png",
      nome: "PC Gamer Pichau Simulador LV2, AMD Ryzen 7 5700X, GeForce RTX 5060 Ti 8GB...",
    },
    {
      imagem: "/images/examples/4-pc.png",
      nome: "PC Gamer Pichau MSI, Intel i7-14700KF, GeForce RTX 5070 12GB...",
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* CARROSSEL PRINCIPAL */}

        <Swiper
          className="intro-swiper"
          modules={[Navigation]}
          slidesPerView={1.6}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/images/examples/intro.jpg"
              alt="Intro"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta1.jpg"
              alt="Oferta 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta2.jpg"
              alt="Oferta 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta1.jpg"
              alt="Oferta 3"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/images/examples/oferta3.png"
              alt="Oferta 4"
            />
          </SwiperSlide>
        </Swiper>


        {/* CATEGORIAS */}

        <div className="product-type">

          <a href="#pecas" className="icon-box">
            <img
              src="/images/icons/hardware.png"
              alt="Peças"
              className="product-icon"
            />
            <span>Peças</span>
          </a>

          <a href="#perifericos" className="icon-box">
            <img
              src="/images/icons/mouse.png"
              alt="Periféricos"
              className="product-icon"
            />
            <span>Periféricos</span>
          </a>

          <a href="#computadores" className="icon-box">
            <img
              src="/images/icons/pc.png"
              alt="Computadores"
              className="product-icon"
            />
            <span>Computadores</span>
          </a>

          <a href="#games" className="icon-box">
            <img
              src="/images/icons/controle.png"
              alt="Games"
              className="product-icon"
            />
            <span>Games</span>
          </a>

          <a href="#smartphones" className="icon-box">
            <img
              src="/images/icons/celular.png"
              alt="Smartphones"
              className="product-icon"
            />
            <span>Smartphones</span>
          </a>

          <a href="#monte-pc" className="icon-box">
            <img
              src="/images/icons/ferramenta.png"
              alt="Monte seu PC"
              className="product-icon"
            />
            <span>Monte seu PC</span>
          </a>

        </div>


        {/* COMPUTADORES */}
        <section id="pecas">
          <h2 className="product-title">
            Peças
          </h2>

          <p>
            Confira nossas peças para montar ou atualizar seu computador.
          </p>

        </section>
        <section id="perifericos">
          <h2 className="product-title">
            Periféricos
          </h2>

          <p>
            Encontre mouses, teclados, headsets e outros periféricos.
          </p>

          <section id="games">
            <h2 className="product-title">
              Games
            </h2>

            <p>
              Confira controles, acessórios e produtos para seus jogos.
            </p>

          </section>
          <section id="smartphones">
            <h2 className="product-title">
              Smartphones
            </h2>

            <p>
              Encontre smartphones e acessórios para o seu dia a dia.
            </p>

          </section>
          <section id="monte-pc">
            <h2 className="product-title">
              Monte seu PC
            </h2>

            <p>
              Monte seu computador escolhendo as peças que você precisa.
            </p>

          </section>
        </section>
        <h2 id="computadores" className="product-title">
          Computadores
        </h2>

        <div className="product-block">

          <Swiper
            className="computadores-swiper"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            preventClicks={false}
          >

            {produtos.map((produto, index) => (
              <SwiperSlide key={index}>

                <div className="card-produto">

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <a href="/produto">
                    <p className="nome-produto">
                      {produto.nome}
                    </p>
                  </a>

                  <p className="preco-antigo">
                    R$2.124,06
                  </p>

                  <p className="preco-atual">
                    R$1.629,90
                  </p>

                  <p className="parcelamento">
                    No PIX ou 10x de 162,99
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>


          {/* SEGUNDO CARROSSEL */}

          <Swiper
            className="computadores-swiper2"
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
          >

            {produtos.map((produto, index) => (
              <SwiperSlide key={index}>

                <div className="card-produto">

                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />

                  <p className="frete">
                    Frete Grátis*
                  </p>

                  <a href="/produto">
                    <p className="nome-produto">{produto.nome}</p>
                  </a>
                  <p className="preco-antigo">
                    R$2.124,06
                  </p>

                  <p className="preco-atual">
                    R$1.629,90
                  </p>

                  <p className="parcelamento">
                    No PIX ou 10x de 162,99
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </main>


      {/* RODAPÉ */}

      <footer>
        <div className="rodape">

          <h1>Contate a gente!</h1>

          <p className="textoRodape">
            📱 +55(21)4056-3140
          </p>

          <p className="textoRodape">
            <strong>
              Suporte: suporte@hypertech.com
            </strong>
          </p>

          <p className="textoRodape">
            📷 @hypertech
          </p>

        </div>
      </footer>
    </>
  );
}

export default Catalogo;