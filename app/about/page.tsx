"use client";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About
        </h1>

        <div className="max-w-2xl space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>I don't care too much about pitching myself.</p>

          <p>
            I like talking to people. I like being able to see someone. I love writing,
            and all I’ve ever wanted to do was make someone laugh.
          </p>

          <p>
            I used to wear a shirt that said "don't bully me, I'll c*m :(." It was such
            a stupid shirt, but nothing made me happier than walking around campus and
            seeing people's eyes light up when they saw it. A chuckle, a suppressed
            laugh, or even one dissipating frown was worth the embarrassment. That shirt
            means so much to me. The smallest, silliest thing can make someone's day
            better. And that is beautiful.
          </p>

          <button
            onClick={() => window.alert("thank you")}
            className="mt-4 inline-block rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-900"
          >
            Wow, I learned more about you.
          </button>
        </div>
      </section>
    </main>
  );
}
