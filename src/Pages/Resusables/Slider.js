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
        className="mt-52 lg:flex lg:flex-row lg:justify-center lg:items-center lg:mt-40"
        id={this.props.id_name}
      >
        <div className="lg:mr-20 lg:ml-20 text-center">
          <div className="heading text-5xl pb-2 lg:text-4xl">
            {this.props.shoot}
          </div>
          <div className="bb text-xs">
            {this.props.photographer ? (
              <div>
                Photgrapher:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.photographer}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.photographer}
                </a>
              </div>
            ) : null}

            {this.props.styling ? (
              <div>
                Styling:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.styling}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.styling}
                </a>
              </div>
            ) : null}

            {this.props.creative ? (
              <div>
                Creative Direction:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.creative}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.creative}
                </a>
              </div>
            ) : null}

            {this.props.model ? (
              <div>
                Model:{' '}
                <a
                  href={`https://www.instagram.com/${this.props.model}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-wavy"
                >
                  @{this.props.model}
                </a>
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
                      ? 'block w-full h-auto object-cover'
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
