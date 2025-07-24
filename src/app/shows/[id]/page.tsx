import getShowById from "~/lib/actions/getShowId";



export default async function ShowId({ params }: { params: { id: string } }) {
  const getShow = await getShowById(params.id);


  return (
    <div>
      {getShow ? (
        <div className="p-4">
          <h1 className="text-2xl font-bold">{getShow.title}</h1>
          <p className="text-gray-700">{getShow.description}</p>
          <img
            src={`${getShow.thumbnail}`}
            height="400"
            width="500"
            alt={getShow.title}
            className="mt-4 rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold">Price: ₹{getShow.price}</p>
          <p className="text-sm text-gray-500">Location: {getShow.location}</p>
          <p className="text-sm text-gray-500">
            Date:{" "}
            {new Date(getShow.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      ) : (
        <p className="text-red-500">Show not found</p>
      )}
    </div>
  );
}
