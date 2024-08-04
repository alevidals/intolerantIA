export default function PrivacyPage() {
  return (
    <div className="container my-20">
      <h1 className="mt-40 text-center text-7xl">Privacy Policy</h1>
      <p className="mx-auto mt-10 max-w-xl text-center text-lg text-muted-foreground leading-loose">
        We take your privacy seriously.
      </p>

      <article className="mx-auto mt-10 flex max-w-xl flex-col gap-y-6 text-lg leading-7">
        <aside>
          <h2 className="font-bold text-violet-400 text-xl">
            Table of Contents
          </h2>
          <ul className="flex list-inside list-decimal flex-col gap-y-2 text-base underline">
            <li>
              <a href="#no-user-data">No User Data Collection</a>
            </li>
            <li>
              <a href="#security-of-keys">Security of Keys</a>
            </li>
            <li>
              <a href="#temporary-memory">Temporary Memory</a>
            </li>
            <li>
              <a href="#commitment-to-privacy">Commitment to Privacy</a>
            </li>
          </ul>
        </aside>

        <p>
          At IntolerantIA, the privacy and security of our users are of utmost
          importance. We are committed to protecting personal information and
          ensuring a safe and reliable experience when using our application.
          Below are the privacy policies that govern the use of IntolerantIA.
        </p>

        <div id="no-user-data">
          <h3 className="font-bold text-violet-400">No User Data Collection</h3>
          <p>
            IntolerantIA does not collect, store, or share users' personal data.
            The information provided, such as food allergies and intolerances,
            is used exclusively during the active session of the application,
            and we do not store any of this information.
          </p>
        </div>
        <div id="security-of-keys">
          <h3 className="font-bold text-violet-400">Security of Keys</h3>
          <p>
            User-provided keys are not saved or stored at any time. These keys
            are maintained solely in the application's memory while it is in
            use. If the user refreshes the page or closes the session, the keys
            are automatically deleted, thus ensuring the highest level of
            security for sensitive information.
          </p>
        </div>
        <div id="temporary-memory">
          <h3 className="font-bold text-violet-400">Temporary Memory</h3>
          <p>
            All information entered by users is stored temporarily in the
            application's memory during active use. Upon refreshing the page or
            ending the session, this information is immediately deleted,
            ensuring that no personal data remains.
          </p>
        </div>
        <div id="commitment-to-privacy">
          <h3 className="font-bold text-violet-400">Commitment to Privacy</h3>
          <p>
            At IntolerantIA, we are dedicated to protecting our users' privacy
            and providing a secure experience. We ensure that no personal
            information is stored permanently and that sensitive data is handled
            with the highest level of security.
          </p>
        </div>
      </article>
    </div>
  )
}
