export default function AboutPage() {
  return (
    <div className="container my-20">
      <h1 className="mt-40 text-center text-7xl">About</h1>
      <div className="mx-auto mt-4 w-fit rounded-md bg-violet-400 px-2 py-1">
        Introducing IntolerantIA
      </div>
      <p className="mx-auto mt-10 max-w-xl text-center text-lg text-muted-foreground leading-loose">
        We are excited to introduce IntolerantIA, a web application that helps
        you quickly review a restaurant's menu to identify allergies and
        intolerances.
      </p>

      <article className="mx-auto mt-10 flex max-w-xl flex-col gap-y-6 text-lg leading-7">
        <p>
          In today’s world, it is increasingly common to encounter individuals
          with food allergies and intolerances. Recognizing this growing need,
          we have developed IntolerantIA, an innovative application designed
          specifically to assist those who face dietary restrictions when dining
          out. This platform is focused on providing a comprehensive guide to
          ensure a safe and tailored dining experience for each user’s unique
          needs.
        </p>

        <p>
          IntolerantIA allows users to complete a detailed form specifying their
          food allergies and intolerances. Additionally, the application
          provides the option to upload up to four photos of the restaurant’s
          menu. With this information, IntolerantIA analyzes the available
          dishes and offers precise recommendations on which dishes are safe,
          which should be avoided, and which require further inquiry with the
          restaurant staff.
        </p>

        <p>
          It is crucial to emphasize that IntolerantIA serves as a guiding and
          supportive tool in selecting suitable food options. The application is
          designed to offer recommendations based on the provided information
          but does not replace direct advice from restaurant personnel. The
          user’s safety is our top priority, so it is imperative to always
          consult with the restaurant before placing an order to ensure that the
          dishes meet the specifications of the user's allergies or
          intolerances.
        </p>

        <p>
          In summary, IntolerantIA represents a significant advancement in how
          individuals with food allergies and intolerances can manage their
          dining choices. Combining advanced technology with a user-centered
          approach, we aim to make dining out a safe and enjoyable experience
          for everyone.
        </p>
      </article>
    </div>
  )
}
