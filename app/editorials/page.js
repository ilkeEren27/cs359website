import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Editorials() {
  return (
    <main>
      <section className="hidden md:flex md:flex-col items-center">
        <h1>Editorials written by Grant & Eren</h1>
        <div className="grid grid-cols-2 space-x-12 mt-12">
          <Card className="w-120 h-80 bg-secondary">
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Description</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-120 h-80 bg-secondary">
            <CardHeader>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Description</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
