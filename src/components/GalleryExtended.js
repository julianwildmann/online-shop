import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
 
class GalleryExtended extends React.Component {
  // Definiere Array in welchem die Produktbilder gespeichert werden
  items = [
      require("./img/product-image-11.jpg"),
      require("./img/product-image-21.jpg"),
      require("./img/product-image-31.jpg"),
      require("./img/product-image-71.jpg"),
      require("./img/product-image-81.jpg"),
];

  // Starte Index bei 0, Zeige ein bzw drei Hero Bilder je nach Bildschirmgröße
  state = {
    currentIndex: 0,
    responsive: { 600: { items: 1 }, 1024: {items: 3}},
    galleryItems: this.galleryItems(),
  }
 
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}><img src={item} alt="productimage+i" id="responsive-thumbnail-image"></img></span>
 
  // Mappe die image Elemente in der Gallery mit den Objekten im Array
  galleryItems() {
    return this.items.map((i) => <img key={i} src={i} alt="productimage+i" id="responsive-gallery-image"></img>)
  }
 
  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      // Definiere die Features der Gallery und erstelle eine Liste mit Thumbnail-Bildern
      <div style={galleryStyle}>
        <AliceCarousel
          dotsDisabled={false}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          infinite={false}
          keysControlDisabled={false}
          playButtonEnabled={false}
          autoPlay={false}
          showSlideIndex={true}
          preventEventOnTouchMove={false}
        /> 

        <div>
          <ul style={thumbnailStyle}>{this.items.map(this.thumbItem)}</ul>
      </div>

      </div>
      
    )
  }
}

// Styleelement für Gallery und Thumbnails
const galleryStyle ={
  marginTop: "0px",
  marginBottom: "15px",
}

const thumbnailStyle ={
  marginTop: "10px",
  marginBottom: "10px",

}

export default GalleryExtended;

/* Button controls
<button onClick={() => this.slidePrev()}>Vorheriges Bild</button>
<button onClick={() => this.slideNext()}>Nächstes Bild</button>
*/
