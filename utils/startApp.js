import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/dombuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
// import { getVocab } from '../api/vocabData';
// import { showVocab } from '../pages/vocab ';

//  import getBooks from '../api/bookData';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // getVocab().then(showVocab);
};

export default startApp;
