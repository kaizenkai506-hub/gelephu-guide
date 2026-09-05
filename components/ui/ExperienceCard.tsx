import Link from "next/link";

type Props = {
  id: string;
  title: string;
  summary: string;
  price: number;
  duration: string;
  image?: string;
  hostName?: string;
};

export default function ExperienceCard({ id, title, summary, price, duration, image, hostName }: Props) {
  return (
    <article className="card">
      <Link href={`/e/${id}`} className="block">
        <div className="h-44 bg-gray-200">
          {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : <div />}
        </div>
        <div className="p-3">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{summary}</p>
          <div className="flex items-center justify-between mt-3 text-sm">
            <span className="text-gray-700">{duration}</span>
            <span className="font-semibold">${price}</span>
          </div>
          {hostName && <div className="mt-2 text-xs text-gray-500">Host: {hostName}</div>}
        </div>
      </Link>
    </article>
  );
}
