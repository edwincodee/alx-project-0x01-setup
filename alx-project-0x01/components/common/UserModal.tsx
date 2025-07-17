import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";
import Input from "./Input";

const UserModal: React.FC<UserModalProps> =  ({onClose, onSubmit}) => {
	const [user, setUser] = useState<UserData>({
	"id": 1,
  "name": "",
  "username": "",
  "email": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  },
  "phone": "",
  "website": "",
  "company": {
    "name": "",
    "catchPhrase": "",
    "bs": ""
	}
})
  
	const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = e.target
		setUser((prevUser) => ({...prevUser, [name]: value}))
	};

	const handleSubmit = (e:React.FormEvent) => {
		e.preventDefault();
		onSubmit(user);
		onClose()
	}
	
	return(
        <div className="fixed bg-amber-950 inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-300 rounded-lg shadow-lg p-10 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex gap-x-5 items-center">
							  <Input label="name" handleChange={handleChange} user={user.name}/>
                <Input label="username" user={user.username} handleChange={handleChange}/>
						  </div>

              <div className="mb-4 flex gap-x-5 items-center">
							  <Input label="phone" handleChange={handleChange} user={user.phone}/>
                <Input label="email" user={user.email} handleChange={handleChange}/>
						  </div>

              {/* <div className="my-3">
                <h3 className=" font-bold text-lg">Company Infomation</h3>
                <div className="mb-4 flex flex-col gap-x-5 items-center">
                  <Input user={user.company.name} label="name" handleChange={handleChange}/>
                  <Input user={user.company.catchPhrase} label="catchPhrase" handleChange={handleChange}/>
                </div>
              </div>

              <div className="my-3">
                <h3 className=" font-bold text-lg">Address Infomation</h3>
                <Input user={user.address.street} label="street" handleChange={handleChange}/>
                <div className="mb-4 flex flex-col gap-x-5 items-center">
                  <Input user={user.address.city} label="city" handleChange={handleChange}/>
                  <Input user={user.address.zipcode} label="zipcode" handleChange={handleChange}/>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">Geo</h3>
                  <div className="flex items-center justify-center">
                    <input type="text"  name="lat" value={user.address.geo.lat} onChange={handleChange} placeholder={`Enter lat`}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="lng" value={user.address.geo.lng} onChange={handleChange} placeholder={`Enter lng`}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div> */}

              <Input label="website" handleChange={handleChange} user={user.website}/>

              <div className="flex justify-between items-center">
							<button type="button"  onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
								Cancel
							</button>
							<button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add Post</button>
						</div>
            </form>
          </div>

        </div>
    )
}

export default UserModal;