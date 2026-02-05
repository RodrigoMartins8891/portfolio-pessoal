import styles from './page.module.css';
import Link from 'next/link';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMysql, SiTypescript, SiFsharp, SiTailwindcss, SiAxios, SiDotnet } from "react-icons/si";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      {/* Header Profissional */}
      <header className={styles.header}>
        <div className={styles.logoGroup}>
          <h1 className={styles.logoTitle}>RODRIGO<span>DEV</span></h1>
        </div>
        <nav className={styles.nav}>
          <Link href="#stack">Stack</Link>
          <Link href="#projetos">Projetos</Link>
          <Link href="https://www.linkedin.com/in/rodrigo-martins-de-oliveira1988/" target="_blank">LinkedIn</Link>
        </nav>
      </header>

      {/* Hero Section - Foco em Full Stack */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Desenvolvedor Full Stack Júnior</span>
          <h2 className={styles.title}>
            Construindo aplicações robustas <br />
            <span>integrando banco de dados e interfaces modernas</span>
          </h2>
          <p className={styles.subtitle}>
            Desenvolvedor Full Stack focado em Node.js e React, criando APIs REST, autenticação e aplicações integradas a bancos SQL. Atualmente em aprendizado de C# e Python para expandir minhas habilidades.
          </p>
          <div className={styles.actions}>
            <Link href="https://github.com/RodrigoMartins8891" target="_blank">
              <button className={styles.primaryBtn}>Ver Portfólio</button>
            </Link>
            <Link href="#contato">
              <button className={styles.secondaryBtn}>Entrar em contato</button>
            </Link>
          </div>
        </div>
      </section>
      <section id="stack" className={styles.stack}>
        <h3 className={styles.sectionTitle}>Stack</h3>

        <div className={styles.stackGrid}>
          <div className={styles.stackCard}>
            <FaReact size={40} color="#61DAFB" />
            <span>React</span>
          </div>

          <div className={styles.stackCard}>
            <FaNodeJs size={40} color="#68A063" />
            <span>Node.js</span>
          </div>

          <div className={styles.stackCard}>
            <SiMysql size={40} color="#4479A1" />
            <span>MySQL</span>
          </div>

          <div className={styles.stackCard}>
            <SiTypescript size={40} color="#3178C6" />
            <span>TypeScript</span>
          </div>

          <div className={styles.stackCard}>
            <FaPython size={40} color="#3776AB" />
            <span>Python</span>
          </div>

          <div className={styles.stackCard}>
            <SiFsharp size={40} color="#9B4F96" />
            <span>C#</span>
          </div>

          <div className={styles.stackCard}>
            <SiDotnet size={40} color="#512BD4" />
            <span>.NET</span>
          </div>

          <div className={styles.stackCard}>
            <FaJsSquare size={40} color="#F7DF1E" />
            <span>JavaScript</span>
          </div>

          <div className={styles.stackCard}>
            <FaCss3Alt size={40} color="#1572B6" />
            <span>CSS</span>
          </div>

          <div className={styles.stackCard}>
            <SiTailwindcss size={40} color="#38BDF8" />
            <span>Tailwind</span>
          </div>

          <div className={styles.stackCard}>
            <SiAxios size={40} color="#5A29E4" />
            <span>Axios</span>
          </div>

          <div className={styles.stackCard}>
            <FaGitAlt size={40} color="#F1502F" />
            <span>Git</span>
          </div>
        </div>


      </section>
      <section id="projetos" className={styles.projects}>
        <h3 className={styles.sectionTitle}>Projetos</h3>

        <div className={styles.projectsGrid}>
          <article className={styles.projectCard}>
            <h4>DevBurger</h4>
            <p>
              Plataforma de pedidos para hamburgueria com área de cliente e
              administrador, integração com API REST e carrinho de compras.
            </p>

            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Axios</li>
              <li>CSS Modules</li>
              <li>JWT</li>
              <li>React Router</li>
              <li>Vite</li>
            </ul>

            <div className={styles.projectLinks}>
              <a href="https://github.com/RodrigoMartins8891/devburger-front" target="_blank">
                GitHub
              </a>
              <a href="https://youtu.be/7RLdOOZIrSY" target="_blank">Demo
              </a>

            </div>
          </article>

          <article className={styles.projectCard}>
            <h4>UrbanKicks</h4>
            <p>
              E-commerce de calçados com listagem de produtos, carrinho e consumo de
              API.
            </p>

            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>JavaScript</li>
              <li>CSS Modules</li>
              <li>API REST</li>
              <li>React Router</li>
              <li>Vite</li>
            </ul>

            <div className={styles.projectLinks}>
              <a href="https://github.com/RodrigoMartins8891/UrbanKicks" target="_blank">
                GitHub
              </a>
              <a href="https://lojaurbankicks.vercel.app/hero" target="_blank">Demo
              </a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <h4> Constuliima</h4>
            <p>
              Website profissional desenvolvido para a Construtora Liima, com foco em performance e experiência do usuário. Projeto Full-Stack com JavaScript moderno, pronto para produção e deploy no Vercel.
            </p>

            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Vercel</li>
            </ul>

            <div className={styles.projectLinks}>
              <a href="https://github.com/RodrigoMartins8891/constuliima-2" target="_blank">GitHub</a>
              <a href="https://constuliima-2-lo5fomwix-rodrigo-martins-de-oliveiras-projects.vercel.app/" target="_blank">Demo</a>
            </div>
          </article>

          <article className={styles.projectCard}>
            <h4>UrbanKicks Admin</h4>
            <p>
              Um sistema de gerenciamento de estoque e vendas desenvolvido para lojas de sneakers. Este projeto foi construído para oferecer uma interface moderna, rápida e funcional para o controle de produtos, clientes e faturamento.
            </p>

            <ul>
              <li>React</li>
              <li>Lucide React</li>
              <li>Recharts</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>Vite</li>
            </ul>

            <div className={styles.projectLinks}>
              <a href="https://github.com/RodrigoMartins8891/dashboard-urbankicks" target="_blank">GitHub</a>
              <a href="https://dashboard-urbankicks-o947hye9q.vercel.app/" target="_blank">Demo</a>
            </div>
          </article>
        </div>
      </section >
      <section id="contato" className={styles.contact}>
        <h3 className={styles.sectionTitle}>Contato</h3>

        <p>
          Estou aberto a oportunidades como Desenvolvedor Full Stack Júnior.
          Vamos conversar?
        </p>

        <div className={styles.contactLinks}>
          <a href="https://mail.google.com/mail/?view=cm&to=rmartinsdeoliveira2@gmail.com" target="_blank">
            📧 Email
          </a>
         <a href="https://github.com/RodrigoMartins8891" target="_blank">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/rodrigo-martins-de-oliveira1988/" target="_blank">
            🔗 LinkedIn
          </a>
        </div>
      </section>
    </main >
  );
}