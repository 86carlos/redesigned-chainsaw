import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between w-full gap-5">
      <div className='max-w-[320px]'>
        <ul className="flex flex-col gap-5 relative flex w-full mx-auto place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <li className="text-blue-400">Donorbox</li>
          <li className="text-white">Donorbox</li>
          <li className="text-red-400">Donorbox</li>
        </ul>
      </div>

      <div className="rounded-xl bg-gray-300 display-flex row p-5 min-w-[320px] min-w-full h-auto min-h-[720px]">
        <Link
          className="text-blue-500 font-bold cursor-pointer"
          href={{
            pathname: '/donations',
            query: { name: 'test' },
          }}
        >
          Donations
        </Link>

      </div>
    </main>
  );
}
