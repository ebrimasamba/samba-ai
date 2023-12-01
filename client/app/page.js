import PromptContainer from "@/components/PromptContainer";

export const metadata = {
  title: "Samba Ai - An image generating website using Dalle-E api",
  description: "An image generating website using Dalle-E api",
};

export const revalidate = 0;

export default async function Page(props) {
  const response = await fetch(`${process.env.API_BASE_URL}/api/v1/posts`);
  const { data } = await response.json();
  // console.log(data);

  return (
    <div className="">
      <section className="">
        <PromptContainer data={data} />
      </section>
    </div>
  );
}
