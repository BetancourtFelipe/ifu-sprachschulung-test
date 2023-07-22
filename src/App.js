/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { logo } from './logo.webp';

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

function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <a href="/">Der Deutsch Intensivkurs mit {`--->`} IFU</a>
        </section>
        <div css={wraperStyles}>
          <div css={topNavigationStyles}>
            <a>
              <img src="logo.webp" alt="logo" />
            </a>
            <nav>
              <ul css={navigationMenuStyles}>
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
