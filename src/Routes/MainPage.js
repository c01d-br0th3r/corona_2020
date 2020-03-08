import React from "react";
import CoronaTemplate from "../Components/CoronaTemplate";
import axios from "axios";
import api from "../api";
import Title from "./Title";
import Info from "./Info";
import News from "./News";
import Location from "./Location";

class MainPage extends React.Component {
  state = {
    total: 0,
    cure: 0,
    death: 0,
    increase: 0,
    cure_rate: 0,
    location: [],
    news: [],
    mask: []
  };

  componentDidMount = async () => {
    const { data } = await api.reports();
    this.setState({
      total: data.total_count,
      cure: data.cure_count,
      death: data.death_count,
      increase: data.increase_count,
      cure_rate: data.cure_rate
    });

    const { data: location } = await api.locations();
    const sortLoaction = location.sort((a, b) => b.total - a.total);
    this.setState({ location: sortLoaction });

    const {
      data: { news }
    } = await api.news();
    this.setState({ news });
  };

  render() {
    console.log(this.state);
    const {
      total,
      cure,
      death,
      increase,
      cure_rate,
      location,
      news
    } = this.state;
    return (
      <CoronaTemplate
        title={<Title />}
        info={
          <Info
            total={total}
            cure={cure}
            death={death}
            increase={increase}
            cure_rate={cure_rate}
          />
        }
        location={<Location location={location} />}
        news={<News news={news} />}
      />
    );
  }
}

export default MainPage;
