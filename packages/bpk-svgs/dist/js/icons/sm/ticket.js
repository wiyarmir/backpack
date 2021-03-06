function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M22 9V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3c1.7 0 3 1.3 3 3s-1.3 3-3 3v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3c-1.7 0-3-1.3-3-3s1.3-3 3-3zm-5.2-.8l-2.3 2.3 1.2 5.2c.1.2 0 .3-.1.4l-.3.3c-.2.2-.5.2-.7 0 0 0 0-.1-.1-.1l-1.8-4-2.1 2.1.4 1.3c0 .2 0 .3-.1.4l-.7.8-.9-2.4-2.3-.7.8-.7c.2-.1.3-.2.5-.1l1.3.4 2.1-2.1-4-1.8c-.3-.1-.4-.4-.2-.6 0 0 0-.1.1-.1l.3-.3c.1-.1.3-.2.4-.1l5.1 1.1 2.4-2.3c.3-.3.8-.3 1.1 0s.2.7-.1 1z" /></svg>;
});