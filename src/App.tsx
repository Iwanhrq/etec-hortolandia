import './App.css'
import etecImg from './assets/etec.png';
import Header from './components/Header';
import Card from './components/Card';
import dsImg from './assets/ds.png';
import admImg from './assets/ma.png';
import nutriImg from './assets/mn.png';
import ds1img from './assets/imgds1.png';
import ds2Img from './assets/imgsds2.png';
import adm1img from './assets/imgadm1.png';
import adm2Img from './assets/imgadm2.png';
import nutri1img from './assets/imgnutri1.png';
import nutri2Img from './assets/imgnutri2.png';
import festivalimg from './assets/imgfestival.png'
import nutritecimg from './assets/imgnutritec.png'
import epaimg from './assets/imgepa.png'
import { useAnimeOnView } from './hooks/useAnimeOnView';
import PhotoMural from './components/PhotoMural';
import epaaa from './assets/epaaa.png'

{/*Nutritec*/}
import img1nutritec from './assets/mn_one.jpg'
import img2nutritec from './assets/mn_two.jpg'
import img3nutritec from './assets/mn_three.jpg'
import img4nutritec from './assets/mn_four.jpg'
import img5nutritec from './assets/mn_five.jpg'

{/*Festival*/}
import img1festival from './assets/festival1.jpg'
import img2festival from './assets/festival2.jpg'
import img3festival from './assets/festival3.jpg'
import img4festival from './assets/festival4.jpg'
import img5festival from './assets/festival5.jpg'


function App() {
  // Hooks para animar textos e imagens das seções (incluindo texto da home)
  const homeTitleRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)' }, once: true });
  const homeLineRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], scaleX: [0.7, 1], duration: 1800, easing: 'out(3)' }, once: true });
  const homePRef = useAnimeOnView<HTMLParagraphElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)' }, once: true });
  const cursosTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const cursosGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const dsTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const dsGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const dsPRef = useAnimeOnView<HTMLParagraphElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const dsH3Ref = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const dsUlRef = useAnimeOnView<HTMLUListElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const admTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const admGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const admPRef = useAnimeOnView<HTMLParagraphElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const admH3Ref = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const admUlRef = useAnimeOnView<HTMLUListElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const nutriTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const nutriGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const nutriPRef = useAnimeOnView<HTMLParagraphElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const nutriH3Ref = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const nutriUlRef = useAnimeOnView<HTMLUListElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const eventosTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const eventosGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const novo1TextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const novo2TextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const dsImg1Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const dsImg2Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const admImg1Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const admImg2Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const nutriImg1Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const nutriImg2Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const nutritecTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const epaTextRef = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const epaGridRef = useAnimeOnView<HTMLDivElement>({ animation: { opacity: [0, 1], translateY: [40, 0], duration: 3000, easing: 'out(3)' }, once: true });
  const epaPRef = useAnimeOnView<HTMLParagraphElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const epaH3Ref = useAnimeOnView<HTMLHeadingElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const epaUlRef = useAnimeOnView<HTMLUListElement>({ animation: { opacity: [0, 1], translateY: [24, 0], duration: 1800, easing: 'out(3)', delay: 400 }, once: true });
  const epaImg1Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });
  const epaImg2Ref = useAnimeOnView<HTMLImageElement>({ animation: { opacity: [0, 1], scale: [0.95, 1], duration: 1500, easing: 'out(3)' }, once: true });

  return (
    <div>
      <Header />
      {/* Section Home */}
      <section id="top" className="relative bg-[#010512] text-white py-20 px-4 overflow-hidden min-h-[90vh] pb-45 flex flex-col justify-center">
        {/* Overlay azul escuro */}
        <div className="absolute inset-0 bg-[#010512] opacity-90"></div>
        {/* Imagem de fundo quase transparente */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${etecImg})` }}
        ></div>
        <div className="relative z-10 max-w-3xl text-left pl-4 sm:pl-8">
          <h1 ref={homeTitleRef} className="text-4xl sm:text-4xl mb-2 inline-block">
            <span className="font-normal">ETEC DE </span>
            <span className="font-bold">HORTOLÂNDIA</span>
          </h1>
          <div ref={homeLineRef} className="h-1 w-2/3 bg-white rounded-full mb-4" style={{ maxWidth: '340px' }}></div>
          <p ref={homePRef} className="text-lg mt-2 font-normal text-white/50">
            Preparando jovens para o mercado com ensino técnico de qualidade
          </p>
        </div>
      </section>

      {/* Section Cursos */}
      <section className="section-anim relative bg-[#010512] text-white py-25 px-4 overflow-hidden min-h-[100vh] flex flex-col items-center justify-center">
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 ref={cursosTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">CURSOS</h2>
          <div ref={cursosGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-full max-w-7xl justify-items-center items-center">
            <Card image={dsImg} title="DESENVOLVIMENTO DE SISTEMAS" />
            <Card image={admImg} title="ADMINISTRAÇÃO" />
            <Card image={nutriImg} title="NUTRIÇÃO E DIETÉTICA" />
          </div>
        </div>
      </section>

      {/* Section DS */}
      <section id="ds" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[105vh]">
        <h2 ref={dsTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">DESENVOLVIMENTO DE SISTEMAS</h2>
        <div ref={dsGridRef} className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          <div className="relative w-full md:w-1/2 justify-center mb-8 md:mb-0 min-h-[20rem] md:min-h-[32rem]">
            <img
              ref={dsImg1Ref}
              src={ds1img}
              alt="DS 1"
              className="hidden md:block w-60 h-72 md:w-80 md:h-[30rem] object-cover shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 z-10 md:left-0 md:top-0 md:translate-x-0 md:z-10 img-anim"
            />
            <img
              ref={dsImg2Ref}
              src={ds2Img}
              alt="DS 2"
              className="w-72 h-100 md:w-80 md:h-[30rem] object-cover shadow-lg mx-auto block md:absolute md:left-56 md:top-20 md:translate-x-0 md:z-10 img-anim"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 items-center md:items-start">
            <div>
              <p ref={dsPRef} className="text-lg md:text-xl text-white/80 text-center md:text-left">
                O curso de Desenvolvimento de Sistemas prepara os alunos para o universo da tecnologia, ensinando desde os fundamentos da programação até a criação de sistemas completos. É ideal para quem gosta de resolver problemas com lógica e inovação.
              </p>
            </div>
            <div>
              <h3 ref={dsH3Ref} className="text-2xl md:text-3xl font-normal mb-2 text-white text-center md:text-left">O que você vai aprender</h3>
              <ul ref={dsUlRef} className="list-disc list-inside text-sm md:text-base text-white/50 pl-4 md:text-left">
                <li className="md:text-lg">Lógica de programação e algoritmos</li>
                <li className="md:text-lg">Linguagens como HTML, CSS, JavaScript e C#</li>
                <li className="md:text-lg">Desenvolvimento de sites, aplicativos e sistemas</li>
                <li className="md:text-lg">Front-end e back-end na prática</li>
                <li className="md:text-lg">Banco de dados</li>
                <li className="md:text-lg">Projetos práticos inspirados no mercado de trabalho</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Administração */}
      <section id="adm" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[105vh]">
        <h2 ref={admTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">ADMINISTRAÇÃO</h2>
        <div ref={admGridRef} className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          <div className="relative w-full md:w-1/2 justify-center mb-8 md:mb-0 min-h-[20rem] md:min-h-[32rem] md:order-1">
            <img
              ref={admImg1Ref}
              src={adm1img}
              alt="ADM 1"
              className="hidden md:block w-60 h-72 md:w-80 md:h-[30rem] object-cover shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 z-10 md:left-0 md:top-0 md:translate-x-0 md:z-10 img-anim"
            />
            <img
              ref={admImg2Ref}
              src={adm2Img}
              alt="ADM 2"
              className="w-72 h-100 md:w-80 md:h-[30rem] object-cover shadow-lg mx-auto block md:absolute md:left-56 md:top-20 md:translate-x-0 md:z-10 img-anim"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 items-center md:items-start md:order-2">
            <div>
              <p ref={admPRef} className="text-lg md:text-xl text-white/80 text-center md:text-left">
                O curso de Administração oferece uma formação sólida para quem deseja atuar no mundo dos negócios, liderar projetos e entender como funciona o dia a dia das empresas. É uma base essencial para futuros empreendedores e gestores.
              </p>
            </div>
            <div>
              <h3 ref={admH3Ref} className="text-2xl md:text-3xl font-normal mb-2 text-white text-center md:text-left">O que você vai aprender</h3>
              <ul ref={admUlRef} className="list-disc list-inside text-sm md:text-base text-white/50 pl-4 md:text-left">
                <li className="md:text-lg">Fundamentos da gestão e organização empresarial</li>
                <li className="md:text-lg">Planejamento estratégico e processos administrativos</li>
                <li className="md:text-lg">Marketing, vendas e relacionamento com o cliente</li>
                <li className="md:text-lg">Gestão financeira e controle de fluxo de caixa</li>
                <li className="md:text-lg">Recursos humanos e rotinas de departamento pessoal</li>
                <li className="md:text-lg">Empreendedorismo e inovação nos negócios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nutrição */}
      <section id="nutri" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[105vh]">
        <h2 ref={nutriTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">NUTRIÇÃO E DIETÉTICA</h2>
        <div ref={nutriGridRef} className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          {/* Imagens collage vertical */}
          <div className="relative w-full md:w-1/2 justify-center mb-8 md:mb-0 min-h-[20rem] md:min-h-[32rem] md:order-1">
            <img
              ref={nutriImg1Ref}
              src={nutri1img}
              alt="Nutrição 1"
              className="hidden md:block w-60 h-72 md:w-80 md:h-[30rem] object-cover shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 z-10 md:left-0 md:top-0 md:translate-x-0 md:z-10 img-anim"
            />
            <img
              ref={nutriImg2Ref}
              src={nutri2Img}
              alt="Nutrição 2"
              className="w-72 h-100 md:w-80 md:h-[30rem] object-cover shadow-lg mx-auto block md:absolute md:left-56 md:top-20 md:translate-x-0 md:z-10 img-anim"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 items-center md:items-start md:order-2">
            <div>
              <p ref={nutriPRef} className="text-lg md:text-xl text-white/80 text-center md:text-left">
                O curso de Nutrição e Dietética prepara os alunos para atuar no setor de alimentação e saúde, com foco na promoção de hábitos alimentares saudáveis e no controle da qualidade dos alimentos. É ideal para quem gosta de cuidar das pessoas por meio da alimentação, com responsabilidade, ética e conhecimento técnico.
              </p>
            </div>
            <div>
              <h3 ref={nutriH3Ref} className="text-2xl md:text-3xl font-normal mb-2 text-white text-center md:text-left">O que você vai aprender</h3>
              <ul ref={nutriUlRef} className="list-disc list-inside text-sm md:text-base text-white/50 pl-4 md:text-left">
                <li className="md:text-lg">Fundamentos da nutrição e alimentação saudável</li>
                <li className="md:text-lg">Técnicas de preparo e conservação de alimentos</li>
                <li className="md:text-lg">Planejamento de cardápios balanceados</li>
                <li className="md:text-lg">Higiene, microbiologia e segurança dos alimentos</li>
                <li className="md:text-lg">Controle de qualidade em cozinhas e refeitórios</li>
                <li className="md:text-lg">Avaliação nutricional e educação alimentar</li>
                <li className="md:text-lg">Práticas em unidades de alimentação e nutrição (UANs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Eventos */}
      <section className="section-anim relative bg-[#010512] text-white py-25 px-4 overflow-hidden min-h-[100vh] flex flex-col items-center justify-center">
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 ref={eventosTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">EVENTOS</h2>
          <div ref={eventosGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 w-full max-w-7xl justify-items-center items-center">
            <Card image={festivalimg} title="FESTIVAL DE DANÇA" />
            <Card image={nutritecimg} title="NUTRITEC" />
            <Card image={epaimg} title="ETEC DE PORTAS ABERTAS" />
          </div>
        </div>
      </section>

      {/* Section Festival */}
      <section id="festival" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center gap-8">
          <h2
            ref={novo1TextRef}
            className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light"
          >
            FESTIVAL DE DANÇA
          </h2>
          <div className="overflow-hidden max-h-[550px] w-full">
            <PhotoMural
              photos={[
                { image: img1festival },
                { image: img2festival },
                { image: img3festival },
                { image: img4festival },
                { image: img5festival },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section Nutritec */}
      <section id="nutritec" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center gap-8">
          <h2
            ref={novo2TextRef}
            className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light"
          >
            NUTRITEC
          </h2>
          <div className="overflow-hidden max-h-[550px] w-full">
            <PhotoMural
              photos={[
                { image: img2nutritec },
                { image: img3nutritec },
                { image: img5nutritec },
                { image: img4nutritec },
                { image: img1nutritec },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section EPA */}
      <section id="epa" className="section-anim relative bg-[#010512] text-white py-8 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[105vh]">
        <h2 ref={epaTextRef} className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-center mb-12">ETEC DE PORTAS ABERTAS</h2>
        <div ref={epaGridRef} className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          <div className="relative w-full md:w-1/2 justify-center mb-8 md:mb-0 min-h-[20rem] md:min-h-[32rem]">
            <img
              ref={epaImg1Ref}
              src={epaimg}
              alt="EPA 1"
              className="hidden md:block w-60 h-72 md:w-80 md:h-[30rem] object-cover shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 z-10 md:left-0 md:top-0 md:translate-x-0 md:z-10 img-anim"
            />
            <img
              ref={epaImg2Ref}
              src={epaaa}
              alt="EPA 2"
              className="w-72 h-100 md:w-80 md:h-[30rem] object-cover shadow-lg mx-auto block md:absolute md:left-56 md:top-20 md:translate-x-0 md:z-10 img-anim"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 items-center md:items-start">
            <div>
              <p ref={epaPRef} className="text-lg md:text-xl text-white/80 text-center md:text-left">
                O ETEC de Portas Abertas é um evento anual que permite aos visitantes conhecer de perto nossa instituição, os cursos oferecidos e as instalações. É uma oportunidade única para estudantes e familiares explorarem as possibilidades de formação técnica de qualidade.
              </p>
            </div>
            <div>
              <h3 ref={epaH3Ref} className="text-2xl md:text-3xl font-normal mb-2 text-white text-center md:text-left">O que você vai encontrar</h3>
              <ul ref={epaUlRef} className="list-disc list-inside text-sm md:text-base text-white/50 pl-4 md:text-left">
                <li className="md:text-lg">Apresentação detalhada de todos os cursos</li>
                <li className="md:text-lg">Visita guiada às salas de aula e laboratórios</li>
                <li className="md:text-lg">Demonstrações práticas dos projetos dos alunos</li>
                <li className="md:text-lg">Conversa com professores e coordenadores</li>
                <li className="md:text-lg">Informações sobre processo seletivo e matrículas</li>
                <li className="md:text-lg">Exposição de trabalhos e projetos desenvolvidos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
