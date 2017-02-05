import HomeApp from './home/home_app';
import ProjectsApp from './projects';

const App = {
  init: function init() {
    new HomeApp().start();
    new ProjectsApp().start();
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
