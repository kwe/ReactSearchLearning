import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  async componentDidUpdate(prevProps, prevState) {
    // tODO: fix statte issue
    if (prevProps.q !== this.props.q) {
      try {
        const results = await axios.get(
          "https://gallery.welshrugbypics.co.uk/api/events/search?num=100&q=" +
            this.props.q
        );
        this.setState({
          photos: results.data.photos
        });
      } catch (e) {
        this.setState({ photos: [] });
        console.log(e);
      }
    }
  }
  // TODO: cancel axios on unmount
  render() {
    return (
      <div>
        <h2>Found:{this.props.q}</h2>
        <p>{this.state.photos.length} hits</p>
        <ul>
          {this.state.photos.map(p => {
            return (
              <li key={p.id}>
                <a
                  href={"https://gallery.welshrugbypics.co.uk/pictures/" + p.id}
                >
                  <img src={p.pictureURI} alt={p.filename} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
