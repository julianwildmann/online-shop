import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
 
class Gallery extends React.Component {
  items = [
      require("./product-image-1.png"),
      require("./product-image-2.png"),
      require("./product-image-3.png"),
      require("./product-image-4.png"),
      require("./product-image-5.png"),
];

 
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems(),
  }
 
  slideTo = (i) => this.setState({ currentIndex: i })
 
  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
 
  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
 
  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
 
  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}><img src={item} alt="productimage+i" width="100px"></img></span>
 
  galleryItems() {
    return this.items.map((i) => <img key={i} src={i} alt="productimage+i" width="300px"></img>)
  }
 
  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div>
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

        />
 
        <ul>{this.items.map(this.thumbItem)}</ul>
        <button onClick={() => this.slidePrev()}>Prev button</button>
        <button onClick={() => this.slideNext()}>Next button</button>
      </div>
    )
  }
}

export default Gallery;