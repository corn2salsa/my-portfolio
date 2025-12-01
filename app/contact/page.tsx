export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-gray-700">
        You should reach out for an interview or collaboration.
      </p>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:your.email@unc.edu"
            className="underline underline-offset-2"
          >
            zrwachtel@gmail.com
          </a>
        </p>
        <p>
            <span className="font-medium">Phone:</span>{" "}
            (804)774-5340
        </p>
        
        {/* You can add socials later */}
        {/* <p><span className="font-medium">Instagram:</span> @yourhandle</p> */}
        {/* <p><span className="font-medium">LinkedIn:</span> /in/yourprofile</p> */}
      </div>
    </div>
  );
}
