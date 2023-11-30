export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section></section>
      <section className="max-w-2xl mx-auto px-4 py-10">
        { children }
      </section>
      <section></section>
    </main>
  )
}