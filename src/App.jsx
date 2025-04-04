import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Selamat Datang di DSS SAW</h1>
      </div>
    </div>
  );
}

export default App;
