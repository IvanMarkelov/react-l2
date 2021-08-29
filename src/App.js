import logo from "./logo.svg";
import "./App.css";
import Lorem from "react-lorem-component";
import NavComponent from "./components/NavComponent";
import HeadComponent from "./components/HeadComponent";
import ArticleComponent from "./components/ArticleComponent";
import FootComponent from "./components/FootComponent";

const data = [
  {
    title: "News 1",
    description:
      <Lorem count="1" />,
  },
  {
    title: "News 1",
    description:
      <Lorem count="1" />,
  },
  {
    title: "News 1",
    description:
      <Lorem count="1" />,
  }
]

function App() {
  const newsCard = ({ title, description }) => {
    return (
      <div
        className="App"
        style={{
          boxSizing: "border-box",
          padding: "10px",
          margin: "10px",
          border: "1px solid black",
          borderRadius: "25px",
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="App">
      {/* <img
        style={{ maxWidth: "30%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="logo"
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.map(props => newsCard(props))}
      </div> */}
      <NavComponent/>
      <HeadComponent/>
      <ArticleComponent/>
      <FootComponent/>
    </div>
  );
}

export default App;
