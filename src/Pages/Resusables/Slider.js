import React, { Component } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Swipe from 'react-easy-swipe';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.imgs.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.imgs.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.imgs.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div
        className="mt-52 text-white lg:flex lg:flex-row lg:justify-center lg:items-center lg:mt-40"
        id={this.props.id_name}
      >
        <div className="lg:mr-20 lg:ml-20 text-center">
          <div className="mon text-5xl pb-2 lg:text-4xl">
            {this.props.shoot}
          </div>
          <div className="bb text-xs">
            {this.props.photographer ? (
              <div>
                Photgraphers:{' '}
                {this.props.photographer.map((name, x) => {
                  return (
                    <a
                      href={`https://www.instagram.com/${name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:decoration-wavy"
                      key={x}
                    >
                      @{name}
                      {'  '}
                    </a>
                  );
                })}
              </div>
            ) : null}

            {this.props.product ? (
              <div>
                Product:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.product}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.product}
                  {'  '}
                </a>
              </div>
            ) : null}

            {this.props.runway ? (
              <div>
                Runway:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.runway}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.runway}
                  {'  '}
                </a>
              </div>
            ) : null}

            {this.props.styling ? (
              <div>
                Styling:{' '}
                {this.props.styling.map((name, x) => {
                  return (
                    <a
                      href={`https://www.instagram.com/${name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:decoration-wavy"
                      key={x}
                    >
                      @{name}
                      {'  '}
                    </a>
                  );
                })}
              </div>
            ) : null}

            {this.props.creative ? (
              <div>
                Creative Direction:{' '}
                {this.props.creative.map((name, x) => {
                  return (
                    <a
                      href={`https://www.instagram.com/${name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:decoration-wavy"
                      key={x}
                    >
                      @{name}
                      {'  '}
                    </a>
                  );
                })}
              </div>
            ) : null}

            {this.props.model ? (
              <div>
                Models:{' '}
                {this.props.model.map((name, x) => {
                  return (
                    <a
                      href={`https://www.instagram.com/${name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:decoration-wavy"
                      key={x}
                    >
                      @{name}
                      {'  '}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-10 max-w-lg h-fit flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {this.props.imgs.map((slide, index) => {
              return (
                <img
                  src={slide}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? 'block w-3/4 object-cover mx-auto'
                      : 'hidden'
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-10">
            {this.props.imgs.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? 'h-2 w-2 bg-ice-green rounded-full mx-2 mb-2 cursor-pointer'
                      : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
