const heading = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello World from React"
);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
