import ProjectsApp from './projects';
import menuApp from './side_menu';

const App = {
  init: function init() {
    new ProjectsApp().start();
    menuApp();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
