import {
  Linkedin,
  Mail,
  Phone,
  Smile,
  UserRound,
} from "lucide-react";

const profileImage = "/images/zach edits-1418.jpg";

const contactInfo = {
  phone: "(804) 774-5340",
  email: "zrwachtel@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/zachary-wachtel-5783bb356",
  linkedinLabel: "linkedin.com/in/zachary-wachtel",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16 text-[#d8c3ff]">
      <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        {/* ABOUT TEXT */}
        <div>
          <div className="flex items-center gap-3">
            <Smile className="h-8 w-8 text-[#805ad5]" />

            <h1 className="text-3xl font-bold tracking-tight text-[#805ad5]">
              About Me
            </h1>
          </div>

          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-[#d8c3ff]">
            <p>
              I grew up wanting to make people laugh. It was the first way I
              learned how to connect with others.
            </p>

            <p>
              I would hear a joke and rush to tell my friends, not only because
              the joke was funny, but because I loved the moment when their eyes
              lit up. I started writing my own jokes and performing stand-up
              when I was 16, chasing the energy that comes from feeling an
              audience buy in and wait for the next laugh.
            </p>

            <p>
              In college, I became more interested in storytelling and began to
              understand the mechanics behind comedy. Why did one joke land
              while another did not? What makes someone lean forward, waiting
              for the next sentence? What makes an idea stick in a person&apos;s
              head? Storytelling relies on timing, tone, and the emotional
              context you create.
            </p>

            <p>
              When I started working in marketing, I realized that the same
              principles apply. A campaign or pitch is ultimately a story. The
              central question is the same: what do I want this person to feel?
            </p>

            <p>
              To me, marketing begins with the smallest emotion you can evoke:
              curiosity, belonging, excitement, or joy. Before the numbers and
              the campaigns, there is a person deciding what matters to them.
              Once you understand that person, you can find the clearest way to
              connect with them.
            </p>
          </div>
        </div>

        {/* IMAGE AND CONTACTS */}
        <aside className="space-y-6">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#3b235c] bg-[#100a18] shadow-[0_0_20px_rgba(128,90,213,0.12)]">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Zach Wachtel"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-[#b794f4]">
                <UserRound className="h-12 w-12 text-[#805ad5]" />

                <p className="text-sm font-medium">
                  Add a photo of yourself here
                </p>
              </div>
            )}
          </div>

          <section className="rounded-2xl border border-[#3b235c] bg-[#100a18] p-5 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-[#805ad5]">
              Contact
            </h2>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#805ad5]" />

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#805ad5]" />

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-5 w-5 shrink-0 text-[#805ad5]" />

                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-[#c4a7ff] underline underline-offset-4 transition hover:text-[#e1d2ff]"
                >
                  {contactInfo.linkedinLabel}
                </a>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}