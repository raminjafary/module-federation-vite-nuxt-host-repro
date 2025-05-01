import { JSX } from "react";
import { type Container, createRoot } from "react-dom/client";

const mount = (
  RenderedElement: (args: unknown) => JSX.Element,
  rootElement: Container,
  props = {}
) => {
  const root = createRoot(rootElement);
  root.render(<RenderedElement {...props} />);
};

export default mount;
