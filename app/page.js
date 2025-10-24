import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col text-center mt-20 gap-y-8">
        {/* Title */}
        <h1 className="text-2xl">Hello, world!</h1>
        <p className="text-xl">CS359 Homework Page of Eren & Grant</p>
        <p>i have nothing else to write</p>
        <Image
          src="/not-found.jpeg"
          className="self-center"
          alt="not found photo (a yellow character doing idk emote)"
          height={250}
          width={250}
        />
      </section>
    </main>
  );
}
