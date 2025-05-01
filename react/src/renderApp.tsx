import { type Container } from "react-dom/client";
import baseMount from "./utils/bootstrap";
import App from "./App";

export const mount = (rootElement: Container) =>
  baseMount(App, rootElement);
