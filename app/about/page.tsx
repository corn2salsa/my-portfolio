"use client";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          About
        </h1>

        <div className="max-w-2xl space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>I grew up only wanting to make people laugh. It was the only way I knew how to connect.</p>

          <p>
           I would hear jokes and rush to tell my friends, not even for the joke itself, but for the moment when their eyes lit up. I started writing my own jokes and doing standup when I was 16, chasing the energy when you can feel people buying in and waiting to laugh.
          </p>

          <p>
            In college, I got into storytelling and began to understand the language of comedy. Why did that joke land? What made someone lean forward waiting for your next words? What makes something stick in your head? Storytelling is based on timing, tone, and the emotional context you build. When I got my first marketing job, I thought I could just make people laugh and that'd be enough to listen to me. I came to realize every campagin or pitch is just that same storytelling: what do I want this person to feel? 
          </p>
            To me, marketing starts with the smallest emotion you can evoke in a person like curiosity, belonging, or joy. Before the numbers and the campagins, there is a person that is deciding what they want. You focus on that, and you find how to connect with them on that. Everything else falls into place.
          <p>

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
