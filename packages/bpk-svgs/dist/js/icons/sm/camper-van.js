import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M6 15c1.1 0 2-.9 2-2H4c0 1.1.9 2 2 2zm8 0c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm2-10.5c0-.8-.7-1.5-1.5-1.5H9L7 5H2.2C1.5 5 1 5.5 1 6.2V11c0 .6.5 1 1 1h9V6h5V4.5zM4 9H3c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1zm5 0H7c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm6-2h-3v5h5v-2l-2-3zm-.5 3h-1c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h.7c.5 0 .8.3.8.8v.7c0 .3-.2.5-.5.5z" /></svg>;
  }

}