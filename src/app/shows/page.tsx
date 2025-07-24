import { api } from "~/trpc/server";
import NavBar from "../_components/navbar";
import ShowComponent from "./_components/ShowComponents";


export default async function ShowPage() {
  const shows = await api.show.get();

  return (
    <main className="flex min-h-screen flex-col items-center bg-white bg-gradient-to-b text-black">
      <div className="container flex flex-col items-center justify-between">
        <NavBar className="text-black" />

        {shows.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
            {shows.map((show) => (
              <div key={show.id} className="">
                <ShowComponent show={show} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-xl font-bold text-gray-700">
              There are no any shows to show
            </p>
          </div>
        )}
      </div>
    </main>
  );
}


