import { UserProps } from "@/interfaces"
import Image from "next/image"


const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-gray-200 rounded-lg shadow-lg
        hover:shadow-xl transition-shadow duration-300">
            
              <div className="flex flex-col items-start gap-0.5">
                <p className="text-base"><span className="font-semibold">Name: </span>{name}</p>
                <p className="text-gray-600 text-sm"> <span  className="font-semibold text-black">Username: </span>{username} <span>Id: {id}</span></p>
              </div>
            

            <div>
              <p><span className="font-semibold">Email: {email}</span></p>
              <p className="py-1"><span className="font-semibold">Phone: {phone}</span></p>
              <p><span className="font-semibold">Website: {website}</span></p>
            </div>

            <div className="flex flex-col items-start gap-y-1">
              <p className="font-bold">Address information</p>
              <div className="flex-col flex gap-y-0.5 items-start">
                <p> <span className="font-semibold">Street: </span>{address.suite}, {address.street}</p>
                <p > <span className="font-semibold">City: </span>{address.city}</p>
                <p> <span className="font-semibold">Zipcode: </span>{address.zipcode}</p>
                <p> <span className="font-semibold">Geo: </span> Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
              </div>
            </div>

            <div className=" flex flex-col items-start gap-y-1">
              <p className="font-bold">Company information</p>
              <div>
                <p> <span className="font-semibold">Name: </span>{company.name}</p>
                <p> <span className="font-semibold">Phrase</span>{company.catchPhrase}</p>
              </div>
            </div>

        </div>
    )
}

export default UserCard