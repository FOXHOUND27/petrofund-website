import NewsClient from "./newsClient";

export async function generateStaticParams() {
  const res = await fetch("https://innovation.muhoko.org/api/news");
  const data = await res.json();

  return data.data.map((item: { id: number }) => ({
    id: String(item.id),
  }));
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <NewsClient params={params} />;
}
