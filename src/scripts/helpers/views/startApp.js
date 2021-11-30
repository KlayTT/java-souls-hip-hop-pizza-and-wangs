import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import navigationEvents from '../../components/events/navigationEvents';
import showHSbuttons from '../../components/homeScreenButtonsCard';
import domEvents from '../../components/events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  showHSbuttons(user);
  domEvents();
  navigationEvents(user);
};
export default startApp;
