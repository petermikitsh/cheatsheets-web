import * as React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Demos",
  parameters: {
    docs: {
      page: () => <React.Fragment>Docs Page</React.Fragment>,
    },
    layout: "fullscreen",
  },
} as Meta;

export const WebComponentsIE11: Story = () => (
  <iframe
    frameBorder="0"
    style={{
      display: "block",
      width: "100%",
      height: "100vh",
    }}
    src="WebComponentsIE11.html"
  />
);

export const WebComponentsMooToolsIE11: Story = () => (
  <iframe
    frameBorder="0"
    style={{
      display: "block",
      width: "100%",
      height: "100vh",
    }}
    src="WebComponentsIE11.html?mootools=1"
  />
);
