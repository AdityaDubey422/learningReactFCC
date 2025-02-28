import {Link} from "react-router"
export default function About() {
  return (
      <main className="aboutMain">
        <img
          src="https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i62IwsL9g6Jf7tJME8xTSUhqCPeKnJgWeuM4DQmUxJRoLLCEOiWiZwYFJ5Q9ELK5s8WRlPxzeQfvoRmEkDZ7iLj0UUllcyIZgUDkOm7Ac7FMmcNx1eH7mcY2SPLkafkSN6Ug7OkzzF-MO2BQEnbMd2eCwDqS7is-1HILSanhI7QZS7qqsl0a3pnZ6870elkBePJYWXD4ugx4Em-kpvYOS4p5tcw76CxuJqqJsz0Ka3wA3sb0CTIM3Vo2midOJfEvXtu3IqqIL-MB2LLNhOENc-g9Um4nSU2UWfp8WkhJ4IwcwgG0opBQ4qOjL3IhYmULCipgQwwoRxOH5GXawVoyTQ__"
          alt=""
        />
        <div className="aboutMainContent">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <div className="para">
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="cta">
            <h3>Your destination is waiting.
            Your van is ready.</h3>
            <Link to="/vans">Explore our vans</Link>
          </div>
        </div>
      </main>
  );
}
