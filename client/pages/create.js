import Head from "next/head";
import Container from "@/components/global/Container";
import Layout from "@/components/global/Layout";
import FormField from "@/components/FormField";
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/global/Loader";
import { useRouter } from "next/router";
import { surpriseMePrompts } from "@/constants";
import Image from "next/image";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const router = useRouter();
  const [generatingImg, setgeneratingImg] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const prompt =
      surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];

    setForm({ ...form, prompt });
  };

  const handleSubmit = async (e) => {
    // console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    setgeneratingImg(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/dalle`,
        {
          prompt: form.prompt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setgeneratingImg(false);
      setForm({
        ...form,
        photo: `data:image/jpeg;base64,${response.data.photo}`,
      });
    } catch (error) {
      console.log(error.response);
      setgeneratingImg(false);
    }
  };

  const handleShare = async (e) => {
    e.preventDefault();
    if (form.photo && form.name && form.prompt) {
      setIsSharing(true);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`,
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setIsSharing(false);
        alert("Successfully posted image");
        router.push("/");
      } catch (error) {
        console.log(error);
        setIsSharing(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Generate and share your image - Samba AI</title>
        <meta
          name="description"
          content="Generate and share an image generated website using Openai api"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <section className="py-16">
          <Container>
            <div className="max-w-xl">
              <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                  Generate Image
                </h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
                  Generate an imaginative image through DALL-E AI and share it
                  with the community
                </p>
              </div>

              <form className="mt-10 " onSubmit={handleSubmit}>
                <div className="mb-5">
                  <FormField
                    id={"name"}
                    label={"Your name"}
                    name={"name"}
                    placeholder={""}
                    handleChange={handleChange}
                    type="text"
                  />
                </div>
                <div className="">
                  <FormField
                    surpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    id={"create-form"}
                    label={"Start with a detailed description"}
                    name={"prompt"}
                    handleChange={handleChange}
                    value={form.prompt}
                    placeholder={""}
                    type="text"
                  />
                </div>

                <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center mt-6">
                  {form.photo ? (
                    <Image
                      src={form.photo || ""}
                      alt={form.prompt}
                      fill
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-[75%] h-[75%] relative">
                      <Image
                        src={"/preview.png"}
                        alt="preview"
                        fill
                        className="object-contain opacity-40 "
                      />
                    </div>
                  )}

                  {generatingImg && (
                    <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                      <Loader />
                    </div>
                  )}
                </div>

                <button className="font-medium bg-green-600 text-white px-4 py-2 rounded-md mt-6">
                  Generate
                </button>
              </form>
            </div>
            <div className="mt-10">
              <p className="mt-2 text-[#666e75] text-[14px]">
                ** Once you have created the image you want, you can share it
                with others in the community **
              </p>
              {isSharing ? (
                <button
                  disabled
                  className="mt-3 text-white bg-primary animate-pulse font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-wait"
                >
                  Sharing...
                </button>
              ) : form.photo ? (
                <button
                  onClick={handleShare}
                  className="mt-3 text-white bg-primary font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Share with the Community
                </button>
              ) : (
                <button
                  disabled
                  className="mt-3 text-white bg-gray-400 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-not-allowed"
                  title="Generate a photo first"
                >
                  Share with the Community
                </button>
              )}
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}
