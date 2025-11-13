export default function MemeGrid({ memes }) {
  if (memes.length === 0)
    return <p className="text-gray-600 mt-10 text-lg text-center">No memes found.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl">
      {memes.map((meme) => (
        <div
          key={meme.id}
          className="bg-white p-3 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center justify-center cursor-pointer h-56"
        >
          <img
            src={meme.url}
            alt={meme.name}
            className="w-full h-32 object-cover rounded-xl mb-2"
          />
          <p className="font-medium text-gray-800 text-center text-sm truncate w-full">
            {meme.name}
          </p>
        </div>
      ))}
    </div>
  );
}
