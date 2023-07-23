/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import audio1 from './audios/9783065209762_CD1_Track01.mp3';
import audio2 from './audios/9783065209762_CD1_Track02.mp3';
import audio3 from './audios/9783065209762_CD1_Track03.mp3';
import audio4 from './audios/9783065209762_CD1_Track04.mp3';
import audio5 from './audios/9783065209762_CD1_Track05.mp3';
import audio6 from './audios/9783065209762_CD1_Track06.mp3';
import audio7 from './audios/9783065209762_CD1_Track07.mp3';
import audio8 from './audios/9783065209762_CD1_Track08.mp3';
import image3 from './images/978-3-06-520973-1.webp';
import image1 from './images/colleagues-working-together-while-sitting-cafe.jpg';
import logo from './images/logo.webp';
import image2 from './images/student-sharing-her-knowledge-with-her-colleagues.jpg';
import clip1 from './videos/Clip1.mp4';
import clip2 from './videos/Clip2.mp4';
import clip3 from './videos/Clip3.mp4';
import clip4 from './videos/Clip4.mp4';

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

const materialStyles = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;
`;

// const materialBlockStyles = css`
//   padding: 20px;
//   margin-bottom: 30px;
//   margin-right: 50px;
// `;

const materialHeaderStyles = css`
  text-align: center;
  font-weight: 600;
  padding-top: 40px;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 15px 12px;
`;

const imageStyles = css`
  width: 20%;
  padding: 0px;
  height: 200px;
`;

const audioInfoContainer = css`
  display: flex;
  justify-content: space-between;
`;

const audioContainer = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 30px;
`;

const audioStyles = css`
  padding: 10px;
  width: 330px;
  border: 1px solid tomato;
  border-radius: 15px;
`;

const infoContainer = css`
  width: 300px;
`;

const videoStyles = css`
  padding: 10px;
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
        <div css={imageContainer}>
          <div css={imageStyles}>
            <img src={image1} alt="students" />
          </div>
          <br />
          <div css={imageStyles}>
            <img src={image2} alt="students" />
          </div>
        </div>
        <div>
          <h1 css={materialHeaderStyles}>A1 Pluspunkt Buch Materialien</h1>
          <div css={materialStyles}>
            <div>
              <div>
                <h2>Audio</h2>
                <p>
                  Hier sind die Audios für das A1 Pluspunkt Buch - CD 1. / 1-8
                </p>
                <div css={audioInfoContainer}>
                  <div css={infoContainer}>
                    <div>
                      <img src={image3} alt="book" />
                    </div>
                    <div>
                      <h3>Kursbuch mit Video-Episoden als MP4-Download</h3>
                      <p>
                        Das Kursbuch zu Pluspunkt Deutsch A1. Leben in
                        Österreich. enthält vierzehn Lektionen sowie vier
                        fakultative Stationen. Im Vordergrund stehen Themen des
                        alltäglichen Lebens und ihre sprachliche Bewältigung.
                        <br /> <br />
                        Jede Lektion enthält eine Doppelseite Sprechen aktiv mit
                        Sprechübungen zur Automatisierung. Die abschließende
                        Seite Gewusst wie fasst die wichtigsten Redemittel und
                        grammatischen Strukturen übersichtlich zusammen. Die
                        fakultativen zweiseitigen Stationen bieten eine
                        spielerische Wiederholung des Gelernten. <br /> <br />
                        Im Anhang des Kursbuches finden Sie: <br />
                        <br />
                        Seiten zu Regeln und Werte, auf die innerhalb einer
                        Lektion verwiesen wird Phonetikübungen, die den
                        einzelnen Lektionen zugeordnet sind
                        <br />
                        <br />
                        Videoseiten für die vertiefende Arbeit mit den vierzehn
                        Videoclips
                        <br />
                        <br />
                        einen Modelltest die Hörtexte, die alphabetische
                        Wortliste
                        <br />
                        <br />
                        sowie eine Liste der unregelmäßigen Verben <br />
                        <br /> Die Videos zeigen in humorvollen Szenen
                        Alltagssituationen in Österreich.
                        <br /> Sie können sowohl im Unterricht als auch in
                        Selbstlernphasen eingesetzt werden.
                      </p>
                    </div>
                  </div>
                  <div css={audioContainer}>
                    <div css={audioStyles}>
                      <p>1/8</p>
                      <audio controls>
                        <source src={audio1} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>2/8</p>
                      <audio controls>
                        <source src={audio2} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>3/8</p>
                      <audio controls>
                        <source src={audio3} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>4/8</p>
                      <audio controls>
                        <source src={audio4} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>5/8</p>
                      <audio controls>
                        <source src={audio5} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>6/8</p>
                      <audio controls>
                        <source src={audio6} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>7/8</p>
                      <audio controls>
                        <source src={audio7} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                    <div css={audioStyles}>
                      <p>8/8</p>
                      <audio controls>
                        <source src={audio8} type="audio/mp3" />
                        <track
                          src="/captions.vtt"
                          kind="captions"
                          label="English Captions"
                          srcLang="en"
                          default
                        />
                        Ihr Browser unterstützt das Audio-Tag nicht.
                      </audio>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2>Video</h2>
                <p>Hier ist das Video für das A1 Pluspunkt Buch.</p>
                <div css={videoStyles}>
                  <video controls>
                    <source src={clip1} type="video/mp4" />
                    <track
                      src="/captions.vtt"
                      kind="captions"
                      label="English Captions"
                      srcLang="en"
                      default
                    />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <div css={videoStyles}>
                  <video controls>
                    <source src={clip2} type="video/mp4" />
                    <track
                      src="/captions.vtt"
                      kind="captions"
                      label="English Captions"
                      srcLang="en"
                      default
                    />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <div css={videoStyles}>
                  <video controls>
                    <source src={clip3} type="video/mp4" />
                    <track
                      src="/captions.vtt"
                      kind="captions"
                      label="English Captions"
                      srcLang="en"
                      default
                    />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
                <div css={videoStyles}>
                  <video controls>
                    <source src={clip4} type="video/mp4" />
                    <track
                      src="/captions.vtt"
                      kind="captions"
                      label="English Captions"
                      srcLang="en"
                      default
                    />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
              </div>

              <div>
                <h2>Schülerinformationen</h2>
                <div>
                  <p>
                    Hier finden Sie Informationen für SchülerInnen zum A1
                    Pluspunkt Buch.
                  </p>
                  <p>
                    Laden Sie{' '}
                    <a href="/infos.txt" download>
                      hier
                    </a>{' '}
                    die Schülerinformationen herunter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
