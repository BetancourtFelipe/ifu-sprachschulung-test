/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './images/logo.webp';

const bannerSectionStyles = css`
  background-color: tomato;
  display: flex;
  justify-content: center;
  padding: 15px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-style: 4rem;
    padding: 12px 16px;
  }
`;

const logoStyles = css`
  width: 200px;
  padding: 12px 16px;
`;

const wrapperStyles = css`
  max-width: 1248px;
  margin: auto;
`;

const topNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;

const navigationMenuStyles = css`
  list-style-type: none;
  display: flex;
  gap: 100px;

  li {
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid tomato;

      > a {
        color: tomato;
      }
    }

    > a {
      text-decoration: none;
      color: tomato;
      font-weight: 600;
      font-style: 4rem;
      padding: 12px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const anmeldungLink = css`
  background-color: tomato;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  font-weight: 600;
  font-style: 4rem;
  font-size: 0.85rem;
  border-radius: 15px;
`;

const mainSectionStyles = css`
  background-color: #ff6247;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  margin: 10px;
  border-radius: 15px;
  font-weight: 600;
  font-style: 4rem;
  font-size: 2rem;
  color: white;
`;

const mainInfoStyles = css`
  text-align: center;
  font-weight: 600;
  font-style: 4rem;
  font-size: 0.85rem;
`;

function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <a href="https://ifu-institut.at/">
            Der Deutsch Intensivkurs mit {`--->`} IFU
          </a>
        </section>
        <div css={wrapperStyles}>
          <div css={topNavigationStyles}>
            <a href="https://ifu-institut.at/">
              <img src={logo} alt="Logo" css={logoStyles} />
            </a>
            <nav>
              <ul css={navigationMenuStyles}>
                <li>
                  <a href="https://sprachportal.integrationsfonds.at/deutsch-lernen/kostenpflichtige-materialien/kursbuecher-mit-oesterreich-schwerpunkt/pluspunkt-deutsch-leben-in-oesterreich">
                    A1 Pluspunkt Buch
                  </a>
                </li>
                <li>
                  <a href="https://ifu-institut.at/lehrerinnen">Info</a>
                </li>
              </ul>
            </nav>
            <div>
              <a css={anmeldungLink} href="https://termine.ifu-institut.at/">
                Anmeldung
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <section css={mainSectionStyles}>
            <div>
              <h2>Pluspunkt Deutsch: Leben in Österreich</h2>
              <br />
            </div>
          </section>
          <div css={wrapperStyles}>
            <div css={mainInfoStyles}>
              <h3>Zusatzmaterialien</h3>
              <p>
                Hier finden Sie Zusatzmaterialien wie Videos oder Modelltests
                sowie die Kurs- und Arbeitsbuch-CDs zum Lehrwerk Pluspunkt
                Deutsch "Leben in Österreich" der Sprachniveaus A1
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
