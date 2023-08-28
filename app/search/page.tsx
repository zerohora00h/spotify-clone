import getSongsByTitle from '@/actions/getSongsByTitle'
import Header from '@/components/Header'
import SearchInput from '@/components/SearchInput'
import SearchContent from './components/SearchContent'

interface SearchProps {
  searchParams: {
    title: string
  }
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title)

  return (
    <div className="rounde-lg h-full w-full overflow-hidden overflow-y-auto bg-neutral-900">
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <div className="text-3xl font-semibold text-white">Search!</div>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  )
}

export default Search
