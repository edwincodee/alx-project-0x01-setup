import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"

interface IUsers {
    posts: UserProps[]
}

const Users: React.FC<IUsers> = ({posts}) => {
    console.log(posts)
    return (
        <div>
            <Header/>
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Users Information</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {posts.map(({id, name, username, company, address, phone, email,website}: UserProps, key: number) => (
                        <UserCard name={name} username={username} company={company} id={id} address={address} phone={phone} 
                        email={email} website={website} key={key}/>
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;