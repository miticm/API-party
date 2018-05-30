import React, { Component } from 'react'
import './RoverInfo.css'

class RoverInfo extends Component {
  state = {
    rover: {},
    selectedDay: null,
  }

  handleDayChange = (day) => {
    this.setState({ selectedDay: day });
  }

  componentWillMount = () => {
    this.fetchRoverData(this.props)
  }

  componentWillReceiveProps = (newProps) => {
    const locationChanged = newProps.location !== this.props.location
    if (locationChanged) {
      this.fetchRoverData(newProps)
    }
  }

  fetchRoverData(props) {
    const rnum = Math.floor(Math.random() * 1000)
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.match.params.rover}/photos?sol=${rnum}&camera=fhaz&api_key=vgett0O98CcFakIZ75ioYrHAAapew8gS4LZaQcav`)
      .then(response => response.json())
      .then(data => {
        let rover = {}
        if (data.photos.length > 0) {
          rover = {
            name: data.photos[0].rover.name,
            imageUrl: data.photos[0].img_src,
            earthDate: data.photos[0].earth_date,
          }
        } else {
          rover = {
            name: props.match.params.rover,
            imageUrl: null,
            earthDate: 'No images for that rover on that random date. Click again'
          }
        }
        this.setState({ rover })
      })
  }

  render() {
    const { imageUrl, earthDate } = this.state.rover
    return (
      <div className="RoverInfo">
        <h3>{earthDate}</h3>
        {
          imageUrl &&
          <img src={imageUrl} alt="surface of Mars" />
        }
      </div>
    )
  }
}

export default RoverInfo