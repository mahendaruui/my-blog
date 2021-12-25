import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
          router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <div className="flex h-screen bg-cnordic text-3xl text-gray-100">
        <h1 className="m-auto">
          {" "}
          <span className="font-semibold font-dancy">
            {" "}
            OOPS...404 Not Found!
          </span>{" "}
        </h1>
      </div>
    </div>
  );
}
