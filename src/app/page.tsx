import Homepage from "@/components/home";
import { homeApi } from "@/utils/api";

export default async function Home() {
  const data = await homeApi();
  return (
    <>
      <Homepage data={data} />
    </>
  );
}
