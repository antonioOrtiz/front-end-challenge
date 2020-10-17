// Styles can be found in root scss/global.scss
import '../scss/global.scss';

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false

library.add( faCheck)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
