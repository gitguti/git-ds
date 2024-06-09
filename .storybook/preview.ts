import type { Preview } from "@storybook/react";
import '../src/styles/main.sass'; // Asegúrate de importar tu archivo de estilos principal

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
