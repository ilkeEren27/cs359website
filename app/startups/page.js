import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Startups() {
  return (
    <main>
      <section className="hidden md:flex md:flex-col items-center">
        <h1>Startups picked by Grant & Eren</h1>
        <div className="grid grid-cols-2 space-x-12 mt-12">
          <Card className="w-120 h-160 bg-secondary">
            <CardHeader>
              <CardTitle className="space-y-2">
                <h1>BindHQ</h1>
                <h2 className="text-white">Eren&apos;s writeup</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/bindhq_logo.png"
                alt="Wales Flag"
                width={120}
                height={72}
              />
              <CardDescription>
                <p className="text-justify text-neutral-100">
                  BindHQ is a startup that’s basically fixing how old and messy
                  the insurance world is. It’s a cloud-based platform where
                  insurance agencies can handle everything in one place, like
                  quotes, policies, billing, and more. Normally, that stuff
                  happens across a bunch of different tools and spreadsheets,
                  but BindHQ puts it all together in one clean dashboard. What I
                  like about them is that they’re not trying to be some
                  overcomplicated tech company. They actually made something
                  simple and useful for people who work in insurance every day.
                  Since it’s all online, agents can log in from anywhere and
                  still keep things moving, which makes their jobs way easier.
                  That might sound basic, but it’s a big deal for an industry
                  that’s been slow to switch to modern systems. The reason they
                  matter is because they’re helping insurance companies work
                  faster, make fewer mistakes, and spend less time fighting with
                  outdated software. It’s not a flashy idea, but it’s something
                  that actually makes a difference. To me, BindHQ shows how tech
                  doesn’t always have to be wild or futuristic to be impressive.
                  Sometimes the smartest move is just improving what’s already
                  there. They saw a broken system, fixed it, and made people’s
                  work life better, and that’s the kind of innovation that
                  really counts.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-120 h-80 bg-secondary">
            <CardHeader>
              <CardTitle className="space-y-2">
                <h1>Startup Name</h1>
                <h2 className="text-white">Grant&apos;s writeup</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/wales.jpg"
                alt="Wales Flag"
                width={240}
                height={144}
              />
              <CardDescription>
                <p className="text-neutral-100"></p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="flex md:hidden justify-center">
        <div className="grid grid-cols-1 space-y-12 mt-12">
          <h1 className="text-center">Editorials written by Grant & Eren</h1>
          <Card className="w-80 h-260 bg-secondary">
            <CardHeader>
              <CardTitle className="space-y-2">
                <h1>BindHQ</h1>
                <h2 className="text-white">Eren&apos;s writeup</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/bindhq_logo.png"
                alt="Wales Flag"
                width={272}
                height={72}
              />
              <CardDescription>
                <p className="text-justify text-neutral-100">
                  BindHQ is a startup that’s basically fixing how old and messy
                  the insurance world is. It’s a cloud-based platform where
                  insurance agencies can handle everything in one place, like
                  quotes, policies, billing, and more. Normally, that stuff
                  happens across a bunch of different tools and spreadsheets,
                  but BindHQ puts it all together in one clean dashboard. What I
                  like about them is that they’re not trying to be some
                  overcomplicated tech company. They actually made something
                  simple and useful for people who work in insurance every day.
                  Since it’s all online, agents can log in from anywhere and
                  still keep things moving, which makes their jobs way easier.
                  That might sound basic, but it’s a big deal for an industry
                  that’s been slow to switch to modern systems. The reason they
                  matter is because they’re helping insurance companies work
                  faster, make fewer mistakes, and spend less time fighting with
                  outdated software. It’s not a flashy idea, but it’s something
                  that actually makes a difference. To me, BindHQ shows how tech
                  doesn’t always have to be wild or futuristic to be impressive.
                  Sometimes the smartest move is just improving what’s already
                  there. They saw a broken system, fixed it, and made people’s
                  work life better, and that’s the kind of innovation that
                  really counts.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-80 h-100 bg-secondary">
            <CardHeader>
              <CardTitle className="space-y-2">
                <h1>Startup Name</h1>
                <h2 className="text-white">Grant&apos;s writeup</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/wales.jpg"
                alt="Wales Flag"
                width={272}
                height={150}
              />
              <CardDescription>
                <p className="text-justify text-neutral-100">Description</p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
