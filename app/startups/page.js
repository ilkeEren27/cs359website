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
          <Card className="w-120 h-80 bg-secondary">
            <CardHeader>
              <CardTitle>Startup Name</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/wales.jpg"
                alt="Wales Flag"
                width={240}
                height={144}
              />
              <CardDescription>Description</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-120 h-80 bg-secondary">
            <CardHeader>
              <CardTitle>Startup Name</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/wales.jpg"
                alt="Wales Flag"
                width={240}
                height={144}
              />
              <CardDescription>Description</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
