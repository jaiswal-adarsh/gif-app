import Image from 'next/image'


export default function Home() {
  return (
    <div className="main">
      <div className="searchbar p-10 mt-10">
        <input className="search border border-slate-100 place-content-center shadow-xl" placeholder='  Article name or keywords...' type="text" />
        <button className='btn border border-slate-400 mx-3 shadow-xl'>Search</button>
      </div>
      <h1>Hii This test Page</h1>
    </div>
  )
}
