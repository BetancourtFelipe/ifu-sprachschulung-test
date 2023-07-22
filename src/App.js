/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const bannerSectionStyles = css`
  background-color: tomato;
  display: flex;
  justify-content: center;
  padding: 15px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const wraperStyles = css`
  max-width: 1248px;
  margin: auto;
`;

const topNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <a href="/">Der Deutsch Intensivkurs mit {`--->`} IFU</a>
        </section>
        <div css={wraperStyles}>
          <div css={topNavigationStyles}>
            <div>logo</div>
            <nav>
              <ul>
                <li>
                  <a href="/">IFU</a>
                </li>
                <li>
                  <a href="/">Bücher</a>
                </li>
                <li>
                  <a href="/">hörbücher</a>
                </li>
                <li>
                  <a href="/">videos</a>
                </li>
                <li>
                  <a href="/">IFU</a>
                </li>
              </ul>
            </nav>
            <div>
              <a href="/">anmelden</a>
            </div>
          </div>
        </div>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
