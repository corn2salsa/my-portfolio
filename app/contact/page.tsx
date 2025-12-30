export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-8 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          You should reach out for an interview or collaboration.
        </p>

        <div className="max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm space-y-3 text-gray-700">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:zrwachtel@gmail.com"
              className="underline underline-offset-4 hover:text-black"
            >
              zrwachtel@gmail.com
            </a>
          </p>

          <p>
            <span className="font-medium">Phone:</span>{" "}
            <span className="text-gray-600">(804) 774-5340</span>
          </p>

          {/* 
          <p>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a href="#" className="underline underline-offset-4">
              /in/yourprofile
            </a>
          </p>
          */}
        </div>
      </section>
    </main>
  );
}
