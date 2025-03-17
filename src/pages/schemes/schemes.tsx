import SchemesData from 'src/components/user/schemes/schemes-data'

const Schemes = () => {
  return (
    <section className="flex w-full flex-col gap-4 p-4 lg:px-6 lg:py-8">
      <div className="w-full">
        <div className="my-2">
          <h1 className="font-serif text-2xl ">Schemes</h1>
          <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
        </div>
        <SchemesData />
      </div>
    </section>
  )
}

export default Schemes
