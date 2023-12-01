import AddPromptForm from "@/components/AddPromptForm";
import Container from "@/components/global/Container";
import Image from "next/image";

export const metadata = {
  title: "Generate and share your image | Samba AI",
  description: "An image generating website using Dalle-E api",
};

export default async function Create() {
  return (
    <div>
      <section className="">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src={"/hero-2.jpg"}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 text-white">
            <Container className={"sm:py-32 pt-40 pb-24 text-center"}>
              <div>
                <h1 className="font-extrabold  text-3xl sm:text-4xl">
                  Generate image
                </h1>
                <p className="mt-2 text-gray-300 ">
                  Generate an imaginative image through DALL-E AI and share it
                  with the community
                </p>
              </div>
            </Container>
          </div>
        </div>
        <AddPromptForm />
      </section>
    </div>
  );
}
