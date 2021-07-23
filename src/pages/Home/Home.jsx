import React, { Component } from "react";
import travels from "../../utils/travels.json";
import TravelList from "../../components/TravelList/TravelList";
import "../../pages/Home/Home.css";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      // initial, array-ul este gol pana ce datele vin de la back-end
      travels: [],
      // staea initiala a inputului este un string gol, acesta nefiind completat cu o valoare predefinita
      inputSearch: "",
    };
  }
  // metoda de request catre back-end
  componentDidMount() {
    this.setState({ travels: travels });
  }
  // functia de actualizare a starii inputului
  handleUpdateInputSearch(event) {
    const newSearch = event.target.value;
    this.setState({ inputSearch: newSearch });
  }
  render() {
    // extragem din props cele doua campuri din state pentru a putea face filtarea
    const { travels, inputSearch } = this.state;
    
    // aplicam metoda toLowerCase pentru transformarea in string
    // prima data preluam numele si aplicam metoda toLowerCase pentru a ne asigura ca, cautarea nu se face case-sensitive ;i apoi metoda inlcudes care verirfica daca sirul introdus este inclus in input
    const travelsFilter = travels.filter((travel) =>
      travel.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    return (
      <div className="home">
        <input
          type="text"
          placeholder="Search travels"
          className="form-control w-50"
          // event pentru actualizarea starii inputului
          onChange={(event) => this.handleUpdateInputSearch(event)}
        />
        {/* pasam metoda de filtare catre lista, pentru a se filtra intrega lista dupa caracterele intrroduse in input */}
        <TravelList travels={travelsFilter} />
      </div>
    );
  }
}

export default Home;
