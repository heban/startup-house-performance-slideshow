/* eslint import/no-webpack-loader-syntax: off, jsx-a11y/accessible-emoji: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Appear,
  Text,
} from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Components
import Logo from './components/Logo';

// Images
import Intro from './images/intro-unsplash.jpeg';
import Yoda from './images/yoda.jpg';
import BlankMobile from './images/blank-mobile.png';
import FilledMobile from './images/filled-mobile.png';
import Marketing from './images/marketing.jpg';
import Lighthouse from './images/lighthouse.png';
import Addy from './images/addy.png';

// Styles
import {
  IntroBox,
  Mark,
  CenterBox,
  Link,
  GenericImage,
  MobileTimelineImage,
  RedMark,
  YellowMark,
} from './presentation.styled';

preloader({
  Intro,
  Yoda,
  BlankMobile,
  FilledMobile,
  Marketing,
  Lighthouse,
  Addy,
});

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#fff',
    secondary: '#000',
    tertiary: '#0066ff',
    quaternary: '#0066ff',
    fifth: '#0066ff',
  },
  {
    primary: 'Cabin',
    secondary: 'Merriweather',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade', 'spin']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1200}
      >
        <Slide bgImage={Intro} bgLighten={0.6}>
          <IntroBox>
            <Heading size={2} lineHeight={1} textColor="secondary">
              FRONT-END
            </Heading>
            <Heading size={4} lineHeight={1} textColor="secondary">
              PERFORMANCE
            </Heading>
            <Heading size={5} lineHeight={1} textColor="tertiary" margin="48px 0 0">
              <CenterBox>
                <Logo /> <span style={{ marginLeft: '10px' }}>Tips & Tricks</span>
              </CenterBox>
            </Heading>
          </IntroBox>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Let's talk about...
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Why performance is so <Mark>important?</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Common <Mark>best practices</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Start-up House homepage</Mark> case
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Popular <Mark>speed test tools</Mark> for analyzing performance
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Your</Mark> ideas?
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Why should we <Mark>care</Mark> about performance?
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>First impression</Mark> is the best impression
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Slow webapps can kill <Mark>conversions</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Fast website === Better <Mark>user experience</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Weak performance can affect a page <Mark>Google rank</Mark>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            One more time, why performance is so <Mark>important</Mark>?
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We want to serve our products <Mark>faster</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We don't want to piss off our <Mark>users</Mark>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 64px 0" textAlign="center" size={5} lineHeight={1} textColor="secondary">
            Don't forget about <Mark>mobile devices</Mark>!
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            - Every year, the use of mobile internet is <Mark>increasing</Mark>
          </Text>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - For many, a mobile device is <Mark>the only way</Mark> to access the Internet
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Cellular networks are <Mark>slow</Mark> and have some limitations
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Mobile CPU is still <Mark>underpowered</Mark> compared to desktop
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Mobile browsers <Mark>!==</Mark> Desktop browsers
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 48px 0" textAlign="center" size={5} lineHeight={1} textColor="secondary">
            And this is how performance can look on <Mark>mobile devices</Mark>
          </Heading>
          <CenterBox>
            <MobileTimelineImage src={BlankMobile} />
            <MobileTimelineImage src={BlankMobile} />
            <MobileTimelineImage src={BlankMobile} />
            <MobileTimelineImage src={FilledMobile} />
          </CenterBox>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 16px 0" textAlign="left" size={6} lineHeight={1} textColor="secondary">
            <Mark>State</Mark> of mobile webpages*
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            <Mark>Total size </Mark>of compressed assets (median):
          </Text>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <span style={{ display: 'inline-block', marginRight: '16px' }}>HTML -</span> <YellowMark>25.8</YellowMark> KB
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <span style={{ display: 'inline-block', marginRight: '16px' }}>CSS -</span> <YellowMark>58.8</YellowMark> KB
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <span style={{ display: 'inline-block', marginRight: '16px' }}>Fonts -</span> <YellowMark>102</YellowMark> KB
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <span style={{ display: 'inline-block', marginRight: '16px' }}>JS -</span> <RedMark>385.9</RedMark> KB
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <span style={{ display: 'inline-block', marginRight: '16px' }}>Images -</span> <RedMark>894.8</RedMark> KB
            </Text>
          </Appear>
          <Text margin="64px 0 0" textAlign="left" textSize={24} textColor="secondary">
            *Source: HTTP Archive 2019
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 16px 0" textAlign="left" size={6} lineHeight={1} textColor="secondary">
            JavaScript <Mark>processing on mobile devices</Mark>*
          </Heading>
          <CenterBox>
            <GenericImage src={Addy} />
          </CenterBox>
          <Text margin="10px 0 0" textAlign="left" textSize={24} textColor="secondary">
            *Source: Cost of JavaScript 2018 by Addy Osmani
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 48px 0" textAlign="center" size={6} lineHeight={1} textColor="secondary">
            Try to explain to the team the negative effects of <div><Mark>big amount of features</Mark></div>
          </Heading>
          <CenterBox>
            <GenericImage src={Marketing} />
          </CenterBox>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Best practices
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Other <Mark>techniques</Mark>
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            - Server-side rendering (<Mark>SSR</Mark>)
          </Text>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Accelerated mobile pages (<Mark>AMP</Mark>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Progressive web apps (<Mark>PWA</Mark>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>VanillaJS</Mark>? <Mark>Svelte</Mark>?
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Watch out for these <Mark>things</Mark>
          </Heading>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Video <Mark>backgrounds</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Heavy "on <Mark>scroll</Mark>" logic 
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Canvas</Mark> calculations
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - A large number of <Mark>custom fonts</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Transitions, animations etc. (<Link href="https://csstriggers.com/" rel="noopener noreferrer" target="_blank">csstriggers.com</Link>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Tracking</Mark> tools
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Frameworks limitations</Mark> and bad practices
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>The variety</Mark> of mobile operating systems and browsers
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Let's talk about <Mark>our homepage</Mark>
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Start-up House <Mark>homepage case</Mark>
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            When the page was ready, PageSpeed from Google gave us about <RedMark>22</RedMark> points :(
          </Text>
          <Appear>
            <Text margin="32px 0 16px 0" textAlign="left" textSize={28} textColor="secondary">
              Now we have about <YellowMark>70</YellowMark> points, and this not our final word, we still fight ;)
            </Text>
          </Appear>
          <Appear>
            <CenterBox>
              <GenericImage src={Lighthouse} />
            </CenterBox>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Start-up House <Mark>homepage issues</Mark>
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            - A <Mark>large</Mark> number of sections
          </Text>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Complicated</Mark> components
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Fancy <Mark>animations</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - <Mark>Third-party</Mark> libraries
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - A huge number of <Mark>assets</Mark>
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Stimulus.js...
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            So what have we done?
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            There is <Mark>no magic</Mark> here. We have implemented a lot of improvements from previous sections.
          </Text>
          <Appear>
            <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>divided one large package</Mark> containing all application controllers into smaller ones
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>reduced a number of calculations</Mark> in different components (e.g. background transitions)
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>extracted some components</Mark> from main bundle
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>removed unnecessary third-party libraries</Mark> like font-awesome
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>simplified some components</Mark> for mobile devices
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - We have <Mark>reduced a number of components</Mark> for mobile devices
            </Text>
          </Appear>
          <Appear>
            <Text margin="32px 0 0" textAlign="left" textSize={28} textColor="secondary">
              - Some parts of our codebase run only when the user <Mark>scrolls to them</Mark>
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Popular <Mark>speed test tools</Mark> for analyzing performance
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading textAlign="left" size={5} lineHeight={1} textColor="secondary">
            Speed test tools
          </Heading>
          <Text margin="64px 0 0" textAlign="left" textSize={28} textColor="secondary">
            1. Google speed test <Mark>family</Mark>:
            <span style={{ display: 'block', padding: '32px 0 0 32px' }}>
              - Web.dev measure (<Link href="https://web.dev/measure/" rel="noopener noreferrer" target="_blank">https://web.dev/measure/</Link>)
            </span>
            <span style={{ display: 'block', padding: '20px 0 0 32px' }}>
              - PageSpeed Insights (<Link href="https://developers.google.com/speed/pagespeed/insights" rel="noopener noreferrer" target="_blank">https://developers.google.com/speed/pagespeed/insights</Link>)
            </span>
            <span style={{ display: 'block', padding: '20px 0 0 32px' }}>
              - Lighthouse in Chrome DevTools (Audits)
            </span>
          </Text>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="secondary">
              2. <Mark>YSlow</Mark> extension (<Link href="https://github.com/marcelduran/yslow/" rel="noopener noreferrer" target="_blank">https://github.com/marcelduran/yslow/</Link>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="secondary">
              3. <Mark>GTmetrix</Mark> (<Link href="https://gtmetrix.com/" rel="noopener noreferrer" target="_blank">https://gtmetrix.com/</Link>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="secondary">
              4. <Mark>Pingdom</Mark> website speed test (<Link href="https://tools.pingdom.com/" rel="noopener noreferrer" target="_blank">https://tools.pingdom.com/</Link>)
            </Text>
          </Appear>
          <Appear>
            <Text margin="48px 0 0" textAlign="left" textSize={28} textColor="secondary">
              5. isit<Mark>wp</Mark> (<Link href="https://www.isitwp.com/free-website-speed-test-tool-for-wordpress/" rel="noopener noreferrer" target="_blank">https://www.isitwp.com/free-website-speed-test-tool-for-wordpress/</Link>)
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="0 0 64px 0" textAlign="center" size={5} lineHeight={1} textColor="secondary">
            Performance is <Mark>the most important</Mark> thing!
          </Heading>
          <GenericImage src={Yoda} />
        </Slide>
        <Slide bgImage={Intro} bgLighten={0.6}>
          <IntroBox>
            <Heading size={3} lineHeight={1} textColor="secondary">
              Thanks!
            </Heading>
            <Heading size={5} lineHeight={1} textColor="tertiary" margin="32px 0 0">
              <CenterBox>
                <Logo /> <span style={{ marginLeft: '16px' }}>Q&A</span>
              </CenterBox>
            </Heading>
          </IntroBox>
        </Slide>
      </Deck>
    );
  }
}
