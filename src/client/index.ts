import { Application } from "./Application";


const app = new Application();
app.interpolation = true;
document.body.appendChild(app.view);

app.interpolation = true;

(window as any).app = app;


// allow to resize viewport and renderer
window.onresize = () => {
    app.viewport.resize(window.innerWidth, window.innerHeight);
    app.renderer.resize(window.innerWidth, window.innerHeight);
} 

