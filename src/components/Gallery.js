import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
 
class Gallery extends React.Component {
  items = [
      require("./product_images/product-image-1.jpg"),
      require("./product_images/product-image-2.jpg"),
      require("./product_images/product-image-3.jpg"),
      require("./product_images/product-image-4.jpg"),
      require("./product_images/product-image-5.jpg"),
];

 
  state = {
    currentIndex: 0,
    responsive: { 750: { items: 1 }, 1024: {items: 3}},
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
      <div>
        <AliceCarousel align-content="center"
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
          preventEventOnTouchMove={true}
          slideNext={true}
          slidePrev={true}
          buttonsDisabled={true}

        />
 
        <ul>{this.items.map(this.thumbItem)}</ul>
      </div>
    )
  }
}

export default Gallery;

/* Button controls
<button onClick={() => this.slidePrev()}>Vorheriges Bild</button>
<button onClick={() => this.slideNext()}>Nächstes Bild</button>
*/
