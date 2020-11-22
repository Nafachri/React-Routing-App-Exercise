import "./App.css";
import React from "react";
import Home from "./pages/Home";
import ListItem from "./pages/ListItem";
import DetailItem from "./pages/DetailItem";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="card">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/"> Digimons</Navbar.Brand>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/list-page">List Page</Link>
          </Nav.Item>
        </Navbar>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/list-page">
            <ListItem />
          </Route>
          <Route path="/detail-page/:name">
            <DetailItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Membuat 4 Function Component : App, Home, List Item, Detail Item

//App Component :
//Meng-Import react router ke dalam Component App
//Meng-Import Component lain yang ingin di tampilkan
//Membuat Function Component
//Meng-Import component-component yang lain ke dalam return
//Membuat Navbar menggunakan Link dari react router
//Kemudian membuat switch route untuk masing-masing component
//Tools : Link, Switch, Route, Params

//Home :
//Membuat Function Component

//List Item :
//Meng-Import React from 'react
//Membuat Function Component
//Membuat data state
//Membuat useEffect untuk menarik data API Digimon
//Membuat data yang di dapat menjadi Link dan dapat pindah ke halaman Detail Item
//Menampilkan Data API Digimon yang sudah di dapat kan pada useEffect
//Export List Item
//Tools : History(untuk push ke Detail Item Page) dan Params

//Detail Item :
//Membuat Function Component
//Menerima detail data API yang di terima dari List Item dan menampilkannya
//pakai params dan use params untuk menampilkan API sesuai params
