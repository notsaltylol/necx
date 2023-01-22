import DisplayCard from '../components/DisplayCard';
import Testimonials from '../components/Testimonials';

const Home = () => {

  return (
    <div className='Home'>

      <div className="welcome">
        <video src="house.mp4" autoPlay loop muted />
        <div className="welcomeContent">
          <h1>Welcome to House</h1>
          <button onClick="document.getElementById('houses').scrollIntoView();"> Get Started </button>
        </div>
      </div>

      <div className="mission">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div class="col">
              <iframe width="560" height="315"
                src="https://www.youtube.com/embed/b4wisxwGThU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="houses" id="houses">
        <h1>Our Houses</h1>
        <div class="container">
          <div class="row">
            <DisplayCard
              image='house_1.jpg'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <DisplayCard
              image='house_2.jpg'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <DisplayCard
              image='house_3.jpg'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
          </div>
          <div class="row">
            <DisplayCard
              image='house_4.webp'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <DisplayCard
              image='house_5.jpg'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <DisplayCard
              image='house_6.jpg'
              title='3b2b'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
          </div>
        </div>
      </div>

      <div className="testimonials">
        <Testimonials/>
      </div>
    </div>
  )
}

export default Home