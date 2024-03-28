import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-gray-900 flex justify-center items-center text-white">
      <div className="w-full max-w-[580px] mx-auto">
        <h2 className="text-4xl font-semibold capitalize">Best journal app</h2>
        <p className="text-xl text-white/70 mt-2">
          This is best AI journal tool to track your mood. You just have to be
          honest about how you feeling.
        </p>
        <div>
          <Link href="/journal">
            <button className="bg-indigo-600 font-semibold py-2 px-5 rounded mt-4">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
