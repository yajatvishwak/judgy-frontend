import ConfigureHackathon from "./src/pages/ConfigureHackathon.svelte";
import Home from "./src/pages/Home.svelte";
import ProjectInfo from "./src/pages/ProjectInfo.svelte";

const routes = {
  "/": Home,
  "/project/:id": ProjectInfo,
  "/config": ConfigureHackathon,
};
export default routes;
