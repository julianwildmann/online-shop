import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
 
class Gallery extends React.Component {
  items = [
      require("./img/product-image-11.jpg"),
      require("./img/product-image-21.jpg"),
      require("./img/product-image-31.jpg"),
      require("./img/product-image-41.jpg"),
      require("./img/product-image-51.jpg"),
];

 
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
 
  galleryItems() {
    return this.items.map((i) => <img key={i} src={i} alt="productimage+i" id="responsive-gallery-image"></img>)
  }
 
  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
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

const galleryStyle ={
  marginTop: "0px",
  marginBottom: "15px",
}

const thumbnailStyle ={
  marginTop: "10px",
  marginBottom: "10px",
}

export default Gallery;

/* Button controls
<button onClick={() => this.slidePrev()}>Vorheriges Bild</button>
<button onClick={() => this.slideNext()}>Nächstes Bild</button>
*/
