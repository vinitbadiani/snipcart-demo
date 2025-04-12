
type Address = {
  line1: string
  line2?: string
  city: string
  state: string
  zip:number
}

export default function Home() {
  /*
  const address_1: Address = {
    line1: "123 Main Street",
    line2: "Apt 4B",
    city: "New York",
    state: "NY",
    zip: 10001
  }
*/
const fav_books = ["Harry Potter", "The Hobbit", "1984"];

 const locations: Record<string,Address> = {
  home: {
    line1: "123 Home Street",
    line2: "# Home",
    city: "Home City",
    state: "Home State",
    zip: 1
  },
  office: {
    line1: "123 Office Street",
    city: "Office City",
    state: "Office State",
    zip: 2
  }
}

  return (
    <div>
      <ol className="list-decimal ml-6">
        {
          fav_books.map((book_name, seq_num) =>(
            <li key={seq_num}>{book_name}</li>
          ))
        }
      </ol>
    
      {
        Object.entries(locations).map(([loc,addr]) => (
          <div key={loc} className="mb-4">
            <p>Location:{loc}</p>
            <p>Address:{addr.line1} {addr.line2? `, ${addr.line2}`:''} </p>
            
            <p>City:{addr.city}</p>
            <p>State:{addr.state}</p>
            <p>Zip:{addr.zip}</p>
          </div>
          )
        )
        
      }
    </div>
  )
}
