// import "./styles/hero.css";
import { IoReturnDownBackOutline } from "react-icons/io5";
import "./styles/projects.css";

const Projects = () => {
  return (
    <>
      <div className="mainpro">
        <a href="../">
          <div className="homepro">
            <IoReturnDownBackOutline className="custom-icon" /> Homepage
          </div>
        </a>
        <p className="allpro">All Projects</p>
        <div className="project-content">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Built with</th>
                <th className="aboutproo">About</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="protitle">Isokan Yoruba Germany</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">React Router</button>
                </td>
                <td className="prowords">
                  We are non-governmental, non-profit, non-political, and
                  non-religious organisation to foster Socio-cul-tural
                  development of the Yoruba race in Diaspora. The association
                  aims at producing an atmosphere for Yoruba’s and other
                  interested people to share and discover Yoruba culture
                </td>

                <td className="prolink">
                  <a href="https://isokanyoruba.com">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Agribase Consult</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">Typescript</button>
                  <button className="project-tools">SCSS</button>
                </td>
                <td className="prowords">
                  A landing page for a agricultural consulting company where
                  various poultry products can be purchased.
                </td>

                <td className="prolink">
                  <a href="https://agribaseconsult.farm">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Codesystic</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">Bootstrap</button>
                  <button className="project-tools">SCSS</button>
                </td>
                <td className="prowords">
                  Codesystic Information Technology Solutions provider. We
                  provide cost-effective services on Mobile app Development,
                  Ui/Ux Designs, Responsive Web Design, BackEnd Development,
                  Graphics Designs, Crypto-Web3 insights & Investments.
                </td>

                <td className="prolink">
                  <a href="https://codesystic.dev">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Mnemonic Generator</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">bip39</button>
                  <button className="project-tools">react-toastify</button>
                </td>
                <td className="prowords">
                  A Mnemonic Generator application using React. The app
                  generates a random mnemonic phrase using the BIP39 standard
                  and allows users to copy it to the clipboard with instant
                  feedback through toast notifications.
                </td>

                <td className="prolink">
                  <a href="https://mnemonic-generator.netlify.app">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">
                  Mnemonic Generator <span className="smallpro">(Python)</span>
                </td>
                <td>
                  <button className="project-tools">Python</button>
                  <button className="project-tools">Flask</button>
                  <button className="project-tools">HTML</button>
                </td>
                <td className="prowords">
                  A web application that generates a 12-word mnemonic phrase,
                  commonly used in cryptocurrency wallets and other security
                  applications. This project is built using Python with Flask
                  for the backend and HTML/CSS/JavaScript for the frontend.
                </td>

                <td className="prolink">
                  <a href="https://github.com/Gizzhy/mnemomic_generator">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>

              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Yishuart</td>
                <td>
                  <button className="project-tools">HTML</button>
                  <button className="project-tools">CSS</button>
                  <button className="project-tools">Javascript</button>
                </td>
                <td className="prowords">A clothing brand collection.</td>

                <td className="prolink">
                  <a href="https://yishuart.org">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Strart</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">Nextjs</button>
                  <button className="project-tools">Tailwind</button>
                </td>
                <td className="prowords">
                  A basic e-commerce website built with nextjs whereby order can
                  be added to cart and redirects to whatsapp with order details.
                </td>

                <td className="prolink">
                  <a href="https://github.com/Gizzhy/strart">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Simmie Shades</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">Bootstrap</button>
                </td>
                <td className="prowords">
                  A basic landing page for a glasses brand featuring a unique
                  scroll feel.
                </td>

                <td className="prolink">
                  <a href="https://simmieshades.netlify.app">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">Travel Wings</td>
                <td>
                  <button className="project-tools">React</button>
                  <button className="project-tools">AOS</button>
                </td>
                <td className="prowords">
                  A basic landing page for a travel website.
                </td>

                <td className="prolink">
                  <a href="https://travel-techmaven.netlify.app/">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
              {/* next */}
              {/* next */}
              {/* next */}
              {/* next */}
              <tr>
                <td className="protitle">iOS calculator replica</td>
                <td>
                  <button className="project-tools">HTML</button>
                  <button className="project-tools">CSS</button>
                  <button className="project-tools">Javascript</button>
                </td>
                <td className="prowords">A replica of the iphone calculator</td>

                <td className="prolink">
                  <a href="https://iphone-calculator-rep.netlify.app">
                    Visit website <span className="north-east-arrow"> ↪</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Projects;
