import { Link, useRouteLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
                <p dangerouslySetInnerHTML={{ __html: event.description }} /> {/* 게시물 내부 스크립트 코드 사용  ex)개발자 블로그 */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;

