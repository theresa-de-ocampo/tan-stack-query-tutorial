import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const e = useRouteError();
  let message: string;

  if (isRouteErrorResponse(e)) {
    message = e.statusText;
  } else if (e instanceof Error) {
    message = e.message;
  } else {
    message = "500 Internal Server Error";
  }

  return (
    <section>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </section>
  );
}
