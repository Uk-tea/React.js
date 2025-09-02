export default function Card({ image, title, description }) {
  return (
    <div className="bg-zinc-900/70 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition h-full w-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-4 flex flex-col gap-2 grow">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-zinc-300 text-sm grow">{description}</p>
        <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm font-medium text-white">
          Read more
        </button>
      </div>
    </div>
  );
}
