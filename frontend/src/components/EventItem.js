import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

// url 길이 40자 이상 넘어가면 ...표현
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

function EventItem({ event }) {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("정말로 삭제하시겠습니까 ?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {event.url && (  // 이벤트에 URL이 있는 경우에만 표시
        <p>
          <label htmlFor="url"></label>
          <a href={event.url} target="_blank" rel="noopener noreferrer">
          {truncateString(event.url, 40)} 
          </a>
        </p>
      )}
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">수정하기</Link>
          <button onClick={startDeleteHandler}>삭제하기</button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;
