import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <h2>Favorites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.map((favorite) => (
          <img
            key={favorite.id}
            src={favorite.images.fixed_height.url}
            alt={favorite.title}
            style={{ margin: '5px', maxWidth: '150px', maxHeight: '150px' }}
          />
        ))}
      </div>
      </div>
    )
  }
}
