import html from "html-literal";
import * as views from "../views";

export default state => html`
  ${views[state.view](state)};
`;

// // export default () => html`
//   ${views["dineDash"]()}${views["home"]()} ${views["about"]()} ${views["contact"]()}
//   ${views["foodMenu"]()}
// `;
