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
          <Card className="w-120 h-140 bg-secondary">
            <CardHeader>
              <CardTitle>
                Harry Kane’s Record-Breaking Start at Bayern Munich
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-justify text-black">
                  Honestly, seeing Harry Kane pop off like this in Germany
                  doesn’t surprise me one bit. The dude’s been one of the most
                  consistent strikers in Europe for years, and now he’s proving
                  he can do it outside the Premier League too. A lot of people
                  doubted if he’d adapt to the Bundesliga, but clearly, goals
                  speak louder than debates. What really stands out to me isn’t
                  just the number of goals but how natural he looks in Bayern’s
                  system. You’d think switching leagues, languages, and tactics
                  would slow him down, but nah—he’s thriving. The chemistry he’s
                  building with players like Leroy Sané and Jamal Musiala makes
                  it look like he’s been there for years. I also find it kinda
                  poetic that after all those years chasing a trophy with
                  Tottenham, he finally joins a club that actually gives him a
                  shot at silverware and lets him break records along the way.
                  It’s like he’s finally getting the recognition he’s always
                  deserved. As someone who actually follows soccer pretty
                  closely, this move also reminds me how much environment
                  matters for players. You can be world-class, but if your club
                  doesn’t have the same hunger or structure, you’ll always hit a
                  ceiling. Kane just found the perfect mix of ambition and
                  support at Bayern. So yeah, this article caught my attention
                  because it’s not just another “Kane scores goals” headline.
                  It’s about a player who stayed loyal for years, took a massive
                  leap out of his comfort zone, and is now making history.
                  That’s inspiring—both as a fan and just as someone who
                  respects seeing hard work finally pay off.
                </p>
              </CardDescription>
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
      <section className="flex md:hidden justify-center">
        <div className="grid grid-cols-1 space-y-12 mt-12">
          <h1 className="text-center">Editorials written by Grant & Eren</h1>
          <Card className="w-80 h-220 bg-secondary">
            <CardHeader>
              <CardTitle>
                Harry Kane’s Record-Breaking Start at Bayern Munich
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="text-justify text-black">
                  Honestly, seeing Harry Kane pop off like this in Germany
                  doesn’t surprise me one bit. The dude’s been one of the most
                  consistent strikers in Europe for years, and now he’s proving
                  he can do it outside the Premier League too. A lot of people
                  doubted if he’d adapt to the Bundesliga, but clearly, goals
                  speak louder than debates. What really stands out to me isn’t
                  just the number of goals but how natural he looks in Bayern’s
                  system. You’d think switching leagues, languages, and tactics
                  would slow him down, but nah—he’s thriving. The chemistry he’s
                  building with players like Leroy Sané and Jamal Musiala makes
                  it look like he’s been there for years. I also find it kinda
                  poetic that after all those years chasing a trophy with
                  Tottenham, he finally joins a club that actually gives him a
                  shot at silverware and lets him break records along the way.
                  It’s like he’s finally getting the recognition he’s always
                  deserved. As someone who actually follows soccer pretty
                  closely, this move also reminds me how much environment
                  matters for players. You can be world-class, but if your club
                  doesn’t have the same hunger or structure, you’ll always hit a
                  ceiling. Kane just found the perfect mix of ambition and
                  support at Bayern. So yeah, this article caught my attention
                  because it’s not just another “Kane scores goals” headline.
                  It’s about a player who stayed loyal for years, took a massive
                  leap out of his comfort zone, and is now making history.
                  That’s inspiring—both as a fan and just as someone who
                  respects seeing hard work finally pay off.
                </p>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-80 h-60 bg-secondary">
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
