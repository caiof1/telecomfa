// CSS
import styles from "./Home.module.css";

// images
import bannerPrincipal from "../../images/banner_principal.png";
import bannerSecundario from "../../images/banner_secundario.png";
import Carousel from "../../components/Carousel/Carousel";

// hooks
import { useState } from "react";
import { useFetchCEP } from "../../hooks/useFetchCEP";
import { useInsertClient } from "../../hooks/useInsertClient";

const Home = () => {
  const [name, setName] = useState();
  const [cep, setCEP] = useState();
  const [bairro, setBairro] = useState();
  const [endereco, setEndereco] = useState();
  const [city, setCity] = useState();
  const [numberResidencia, setNumberResidencia] = useState();
  const [numberPhone, setNumberPhone] = useState();
  const [plano, setPlano] = useState();

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const {searchCEP} = useFetchCEP()

  const { insertOrder, loading, acess } = useInsertClient('clients')

  const handleCepChange = async (e) => {
    setCEP(e.target.value)

    if(e.target.value.length >= 8) {
      const datas = await searchCEP(e.target.value)

      setBairro(datas?.bairro)
      setCity(datas?.localidade)
      setEndereco(datas?.logradouro)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(localStorage.getItem("formCreate") !== "true") {
      const data = {
        name,
        cep,
        bairro,
        endereco,
        city,
        numberResidencia,
        numberPhone,
        plano
      }
  
      insertOrder(data)

      setMessage('Seu contato foi enviado com sucesso')

      setTimeout(() => {
        setMessage('')
      }, 3500);
    } else {
      setError('Você já enviou o seu contato.')
      setTimeout(() => {
        setError('')
      }, 3500);
    }
  }

  return (
    <main className={styles.container_main}>
      <section className={styles.first_banner}>
        <div className={styles.text_banner}>
          <h1>
            <span>Vivo</span> Fibra <br /> a <span>Melhor banda larga</span>
          </h1>
          <p>
            Para o seu game, ou sua serie. O que você está esperando para
            adquirir a sua vivo fibra?
          </p>
          <button>Provas sociais</button>
        </div>
        <div className={styles.banner_girl}>
          <img src={bannerPrincipal} alt="" />
        </div>
      </section>

      <section className={styles.call_whatsapp}>
        <div className={`${styles.carrousel_whatsapp}`}>
          <div>
            <i class="fa-solid fa-phone-volume"></i>
            <span>
              <span>Nos ligue</span>
              <span>(11) 960434439</span>
            </span>
          </div>
          <div className={styles.border}></div>
          <div>
            <i class="fa-brands fa-whatsapp"></i>
            <span>
              <span>Mande mensagem</span>
              <span>(11) 960434439</span>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.container_about}>
        <div className={styles.introducao}>
          <div className={styles.title_introducao}>
            <h2>
              Introdução <br /> <span>A Telecom FA</span>
            </h2>
          </div>
          <div className={styles.text_introducao}>
            <p>
              A Telecom FA é uma parceira vivo, e disponibilizamos internet de
              qualidade na grande São Paulo. Somos uma distribuidora da internet
              vivo, TV, Chips e tudo mais.
            </p>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.second_banner}>
            <img src={bannerSecundario} alt="" />
          </div>
          <div className={styles.about_text}>
            <h2>
              Sobre <br /> <span>Telecom FA</span>
            </h2>
            <p>
              A Telecom FA foi fundada para dar suporte a Evolution Telecom, uma
              empresa que junto com a Evolution se tornaram referência por ser
              parceira da vivo e vender planos vivo fibra para a Grande São
              Paulo. <br /> <br /> Assim como a propria vivo, nós da Telecom FA
              sempre nos atualizamos e por isso, finalmente chegamos na redes
              sociais para divulgação juntamente com trafego pago, onde estamos
              fazendo anuncio e é provavelmente por esse anuncio que você chegou
              aqui. E você se pergunta “Como posso confiar na Telecom FA” e aqui
              está a sua resposta. Logo abaixo, temos um link para você ir
              direto para as provas sociais de outros clientes, onde você poderá
              consultar e verificar que o que estamos falando é totalmente
              veridico
            </p>
            <button>Provas sociais</button>
          </div>
        </div>
      </section>

      <section id="planos" className={styles.carrousel_products}>
        <div className={styles.title_cpf}>
          <h2>Nossos planos para CPF</h2>
        </div>
        <Carousel setPlano={setPlano} />
      </section>

      <section className={styles.last_banner}>
        <div className={styles.banner}>
          <h3>Para você que ama jogar</h3>
          <p>A vivo tem o menor ping da america latina</p>
        </div>
      </section>

      <section className={styles.carrousel_products}>
        <div className={styles.title_cpf}>
          <h2>Nossos planos para CNPJ</h2>
        </div>
        <Carousel setPlano={setPlano} />
      </section>

      <form onSubmit={handleSubmit} className={styles.form} id="form">
        <div className={styles.container_form}>
          <div className={styles.title_form}>
            <h2>Vivo Fibra</h2>
          </div>
          <div className={styles.border_form}></div>
          <div className={styles.cadastre_se}>
            <p>Cadastre-se que iremos te chamar</p>
          </div>
          <div className={styles.inputs_form}>
            <div className={styles.full_size}>
              <input
                type="text"
                placeholder="Nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.min_size}>
              <div>
                <input
                  type="text"
                  placeholder="CEP"
                  required
                  value={cep}
                  onChange={handleCepChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bairro"
                  required
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.min_size}>
              <div>
                <input
                  type="text"
                  placeholder="Endereço"
                  required
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Cidade"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.min_size}>
              <div>
                <input
                  type="text"
                  placeholder="Número da residência"
                  required
                  value={numberResidencia}
                  onChange={(e) => setNumberResidencia(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Número com DDD"
                  required
                  value={numberPhone}
                  onChange={(e) => setNumberPhone(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.full_size}>
              <input
                type="text"
                placeholder="Plano que você deseja"
                required
                value={plano}
                onChange={(e) => setPlano(e.target.value)}
              />
            </div>
            <div className={styles.button_submit}>
              <button className={styles.btn}>Enviar</button>
            </div>
            {error && <span className="error">{error}</span>}
            {message && <span className="message">{message}</span>}
          </div>
        </div>
      </form>
    </main>
  );
};

export default Home;
