// Zweites Carousel, dass keine Thumbnails sondern nur Slider enthält

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
 
class GalleryNoThumb extends React.Component {
  items = [
      require("./product_images/product-image-1.jpg"),
      require("./product_images/product-image-2.jpg"),
      require("./product_images/product-image-3.jpg"),
      require("./product_images/product-image-4.jpg"),
      require("./product_images/product-image-5.jpg"),
];

 
  state = {
    currentIndex: 0,
    responsive: { 750: { items: 2 }},
    galleryItems: this.galleryItems(),
  }
 
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  galleryItems() {
    return this.items.map((i) => <img key={i} src={i} alt="productimage+i" id="responsive-gallerynothumb-image"></img>)
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

        />
      </div>
    )
  }
}

export default GalleryNoThumb;