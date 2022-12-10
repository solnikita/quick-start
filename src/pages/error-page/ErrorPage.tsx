import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="h-screen grid content-center text-center">
      <h1 className="text-4xl m-4">Oops!</h1>
      <p className="m-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl p-16">
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
