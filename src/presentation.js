/* eslint import/no-webpack-loader-syntax: off, jsx-a11y/accessible-emoji: off */

// Import React
import React from 'react';
import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import Loading from 'react-loading';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
  Text,
  CodePane,
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Charts
import ReactUsage from './components/ReactUsage';
import ReactNativeUsage from './components/ReactNativeUsage';
import EmotionUsage from './components/EmotionUsage';
import StyledUsage from './components/StyledUsage';
import TypeScriptUsage from './components/TypeScriptUsage';

// Images
import Intro from './images/intro-unsplash.jpg';
import Android from './images/android.png';
import ReactTrends from './images/react-trends.png';
import GatsbyTrends from './images/gatsby.png';
import ReactDevFirst from './images/react1.png';
import ReactDevSecond from './images/react2.png';

// Styles
import {
  IntroBox,
  Mark,
  ImportantBox,
  AndroidImage,
  CodeWithImage,
  Bridge,
  ReactTrendsImage,
  GatsbyTrendsImage,
  ReactImageContainer,
  ReactFirstImage,
  ReactSecondImage,
} from './presentation.styled';

preloader({
  Intro,
  Android,
  ReactTrends,
  GatsbyTrends,
  ReactDevFirst,
  ReactDevSecond,
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#214172',
    secondary: '#fff',
    tertiary: '#ed1b23',
    quaternary: '#fff',
    fifth: '#ffe6a9',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 1000 };

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade', 'spin']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1000}
      >
        <Slide bgImage={Intro} bgDarken={0.5}>
          <IntroBox>
            <Heading size={1} lineHeight={1} textColor="secondary">
              5
            </Heading>
            <Heading size={2} lineHeight={1} textColor="secondary">
              technologii
            </Heading>
            <Heading size={4} lineHeight={1} textColor="secondary">
              we Frontendzie
            </Heading>
            <Heading size={5} lineHeight={1} textColor="tertiary">
              wartych poznania
            </Heading>
          </IntroBox>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Pogadamy dziś o...
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Takiej tam bibliotece <Mark>React.js</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Nieco dziwnym podejściu do stylowania zwanym <Mark>CSS in JS</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Języku <Mark>TypeScript</Mark>, który jest coraz głośniejszy
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Generatorze stron <Mark>GatsbyJS</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Sposobie tworzenia aplikacji mobilnych w <Mark>React Native</Mark>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Biblioteka do tworzenia interfejsów w JavaScript
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              React jest biblioteką pozwalającą projektować aplikacje w oparciu o komponenty.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Komponenty tworzone są w sposób deklaratywny. Opisujemy co ma zostać zrobione, a nie w jaki sposób.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Aby uprościć proces tworzenia komponentów, React wprowadził notację <Mark>JSX</Mark>. Przypomina ona zwykły kod HTML, który możemy "wzbogacać" o kod JavaScript i zwracać w komponentach.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              React efektywnie renderuje komponenty dzięki zastosowaniu mechanizmu Virtual DOM. Jest to "wirtualna" reprezentacja aktualnego drzewa DOM, dzięki której React wie jaki komponent powinien zostać przerenderowany.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Projektowanie w oparciu o komponenty*
          </Text>
          <ReactImageContainer>
            <ReactFirstImage src={ReactDevFirst} />
            <ReactSecondImage src={ReactDevSecond} />
          </ReactImageContainer>
          <Text margin="64px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://pl.reactjs.org/docs/thinking-in-react.html
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Podejście imperatywne kontra deklaratywne
          </Text>
          <Appear>
            <div>
              <CodePane
                theme="dark"
                textSize={24}
                lang="jsx"
                source={require('!raw-loader!./codes/react1.example')}
                margin="48px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy komponent*
          </Text>
          <CodePane
            theme="dark"
            textSize={24}
            lang="jsx"
            source={require('!raw-loader!./codes/react2.example')}
            margin="32px auto 0 auto"
          />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://pl.reactjs.org
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              React ma bardzo łatwy próg wejścia. Tworzenie nowych komponentów jest intuicyjne i dość szybko jesteśmy w stanie stworzyć prostą aplikację.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Ogromna społeczność skupiona wokół Reacta powoduje, że każdego dnia powstają nowe biblioteki i użyteczne komponenty, które można wykorzystać w swoich programach.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 32px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Wszechstronność Reacta sprawia, że biblioteka ta zaczyna pojawiać się jako element innych, bardziej złożonych technologii, np. React Native czy GatsbyJS.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Sam React to często za mało. Do tworzenia dużych aplikacji potrzebujemy większego ekosystemu, rozszerzonego o takie elementy jak np. routing czy zarządzanie stanem. 
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js - trendy
          </Heading>
          <Appear>
            <div>
              <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
                W porównaniu do Angulara, popularność Reacta rośnie praktycznie nieustannie*
              </Text>
              <ReactTrendsImage src={ReactTrends} />
              <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
                *źródło: https://trends.google.pl/trends/explore?date=today%205-y&q=%2Fm%2F012l1vxv,%2Fg%2F11c6w0ddw9
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React.js
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania*
          </Text>
          <ReactUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2018.stateofjs.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Nowoczesne podejście do stylowania stron i aplikacji WWW
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              <Mark>CSS-in-JS</Mark> nie jest biblioteką, frameworkiem lub kompilatorem CSS. Jest to zbiór pewnych zasad pozwalających tworzyć style CSS z użyciem JavaScriptu.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Niektóre frameworki pozwalają na stosowanie technik CSS-in-JS bez użycia zewnętrznych zależności. Np. React pozwala na zapisanie styli w komponentach w postaci notacji literału obiektowego.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Stylowanie za pomocą bibliotek JS pozwala rozwiązać pewne problemy z którymi CSS jeszcze sobie nie radzi, np. współdzielenie zmiennych pomiędzy CSS i JS.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy kod z użyciem domyślnego sposobu dołączania styli w React.js
          </Text>
          <Appear>
            <div>
              <CodePane
                theme="dark"
                textSize={24}
                lang="jsx"
                source={require('!raw-loader!./codes/styled1.example')}
                margin="48px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy kod z użyciem Styled-components
          </Text>
          <Appear>
            <div>
              <CodePane
                theme="dark"
                textSize={20}
                lang="jsx"
                source={require('!raw-loader!./codes/styled2.example')}
                margin="32px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Podejście CSS in JS sprawia, że kod jest znacznie "schludniejszy", ponieważ nie musimy rozszerzać HTMLa o nazwy klas, a wszelkie modyfikatory przekazujemy jako właściwości komponentów. 
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Mechanizmy takie jak minifikacja styli, usuwanie nieużywanych reguł czy też izolacja styli w ramach komponentu, są przez niektóre biblioteki wykonywane praktycznie za programistę.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 32px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Wszystkie zalety preprocesorów np. zagnieżdżanie styli albo tworzenie reużywalnych kawałków kodu, są możliwe przy użyciu technik CSS in JS.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Style umieszczane dynamicznie w trakcie parsowania skryptu, nigdy nie będą tak szybko "włączane" do strony jak natywny CSS. Poza tym jest to podejście, które dość mocno dzieli społeczność.
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania Styled-components*
          </Text>
          <StyledUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2019.stateofcss.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            CSS in JS
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania Emotion*
          </Text>
          <EmotionUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2019.stateofcss.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Język kompilowany do JavaScriptu o wielkich możliwościach
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              TypeScript jest darmowym i otwartym językiem programowania stworzonym w 2012 roku przez firmę Microsoft.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Jest określany jako superset (nadzbiór) dla języka JavaScript, dzięki czemu posiada wszystkie mechanizmy swojego protoplasty, a także rozszerza go o nowe możliwości.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Najważniejszą różnicą w stosunku do JavaScriptu jest wprowadzenie opcjonalnego, statycznego typowania.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy kod i różnica w zapisie w stosunku do czystego JavaScriptu
          </Text>
          <Appear>
            <div>
              <CodePane
                theme="dark"
                textSize={24}
                lang="js"
                source={require('!raw-loader!./codes/ts.example')}
                margin="48px auto 0 auto"
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Text margin="20px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Każdy kod napisany w czystym JS jest poprawnie walidującym się kodem w TypeScript.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Kod jest bardziej przejrzysty i łatwiejszy do zrozumienia. Dzięki określeniu typów zmiennych, od razu jesteśmy w stanie się zorientować jakiej wartości spodziewa się funkcja.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              TypeScript pozwala wychwycić wiele błędów już w trakcie transpilowania, dzięki czemu cały proces debugowania jest prostszy.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 32px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Wiele edytorów oferuje wtyczki analizujące kod TS. Oznacza to, że programista jest informowany na bieżąco gdy wprowadza niewłaściwego rodzaju zmienne.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Łatwiej jest przejść na TS programistom z innych języków obiektowych, niż programistom, którzy nie mieli wcześniej do czynienia z paradygmatem obiektowym.
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            TypeScript
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania*
          </Text>
          <TypeScriptUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2018.stateofjs.com
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Generator statycznych stron dla miłośników Reacta
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              GatsbyJS jest frameworkiem pozwalającym tworzyć szybkie i zoptymalizowane strony WWW oraz aplikacje.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Wykorzystywany jest w tym celu React, aby ułatwić programistom pracę nad kodem.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Wynikiem budowania przyszłej strony lub aplikacji w GatsbyJS jest zbiór plików .html, .js oraz .css. Nie ma tutaj żadnego kodu wykonywanego po stronie serwera.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS
          </Heading>
          <Text margin="24px 0 64px 0" textAlign="left" textSize={28} textColor="secondary">
            Jak tworzymy nową stronę?
          </Text>
          <Terminal title="1. pawel@mac: ~(zsh)" output={ [
            <Typist cursor={ cursor }>npm install -g gatsby-cli</Typist>,
            <div style={{ color: "#33B969"}}>TOTAL: 174 SUCCESS</div>,
            <Typist cursor={ cursor }>gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world</Typist>,
            [
              <div style={{ display: "flex", alignItems: "center" }}>
                <Loading type="bars" color="#fff" height="30" width="30" />
                <span style={{ marginLeft: "1rem" }}>Installing packages...</span>
              </div>,
              <div style={{ color: "#33B969"}}>⚡️ Success!</div>
            ],
            <Typist cursor={ cursor }>cd hello-world</Typist>,
            <Typist cursor={ cursor }>gatsby develop</Typist>,
            <div style={{ color: "#33B969"}}>⚡️ Open localhost:8000</div>
            ]}
          />
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Gatsby posiada ogromny ekosystem wtyczek za pomocą których możemy np. w łatwy sposób dodać system komentarzy, Google Analytics etc.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Posiada możliwość pobierania danych z wielu źródeł np. z plików MarkDown, a nawet bezpośrednio z WordPressa.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 64px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Gatsby stawia bardzo duży nacisk na optymalizacje wynikowej strony. Domyślnie każda strona jest także aplikacją <Mark>PWA</Mark> co daje końcowym użytkownikom jeszcze lepsze doświadczenie.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Próg wejścia w tę technologię może być duży jeżeli nie jesteśmy zaznajomieni z procesem budowania stron statycznych i środowiskiem Reacta.
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            GatsbyJS - trendy
          </Heading>
          <Appear>
            <div>
              <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
                Popularność GatsbyJS w serwisie Github rośnie bardzo szybko*
              </Text>
              <GatsbyTrendsImage src={GatsbyTrends} />
              <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
                *źródło: https://star-history.t9t.io/#gatsbyjs/gatsby
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Gdy technologie webowe, spotykają mobilne
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              React Native umożliwia tworzenie cross-platformowych aplikacji mobilnych za pomocą Reacta.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Mottem przewodnim RN jest <Mark>"Naucz się raz, pisz wszędzie"</Mark>.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              Systemami docelowymi dla React Native są Android i iOS. Istnieje jednak osobny projekt, rozwijany specjalnie dla systemu Windows.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} lineHeight={1.2} textColor="fifth">
              W przeciwieństwie do np. PhoneGapa, wynikowym produktem RN jest pełnoprawna aplikacja natywna, nie webowa.
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Przykładowy kod
          </Text>
          <Appear>
            <CodeWithImage>
              <div style={{ maxWidth: '600px', width: '600px' }}>
                <CodePane
                  theme="dark"
                  textSize={16}
                  lang="jsx"
                  source={require('!raw-loader!./codes/rn.example')}
                  margin="32px auto 0 auto"
                />
              </div>
              <AndroidImage src={Android} />
            </CodeWithImage>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 64px 0" textAlign="left" textSize={28} textColor="secondary">
            Jak to działa?
          </Text>
          <Appear>
            <Bridge>
              <div>
                <Text textSize={28} textColor="primary">
                  Wątek JavaScriptu
                </Text>
              </div>
              <div>
                <Text textSize={28} textColor="primary">
                  Bridge
                </Text>
              </div>
              <div>
                <Text textSize={28} textColor="primary">
                  Wątki natywne
                </Text>
              </div>
            </Bridge>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="24px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Czy to dobry wybór?
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              React Native może przyspieszyć proces powstawania oprogramowania, ponieważ znaczna część kodu jest współdzielona pomiędzy różne platformy.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Ma łatwy próg wejścia i programiści zaznajomieni z Reactem, poczują się tutaj jak w domu.
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 64px 0" textAlign="left" lineHeight={1.2} textSize={28} textColor="fifth">
              Aplikacje są szybsze niż aplikacje hybrydowe.
            </Text>
          </Appear>
          <Appear>
            <ImportantBox>
              <Text textAlign="left" textSize={28} lineHeight={1.2} textColor="tertiary">
                Bardziej złożone aplikacje nadal będą jednak wymagały kodu natywnego. Aplikacja będzie szybsza niż w przypadku korzystania z WebView, ale w dalszym ciągu będzie w tyle za "prawdziwymi" aplikacjami natywnymi.
              </Text>
            </ImportantBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
            Poziom satysfakcji z używania*
          </Text>
          <ReactNativeUsage />
          <Text margin="48px 0 0" textAlign="left" textSize={18} textColor="secondary">
            *źródło: https://2018.stateofjs.com
          </Text>
        </Slide>
        <Slide bgImage={Intro} bgDarken={0.5}>
          <IntroBox>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Dziękuję :)
            </Heading>
          </IntroBox>
        </Slide>
      </Deck>
    );
  }
}
