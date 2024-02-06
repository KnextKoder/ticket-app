import TicketCard from "./(components)/TicketCard"

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="md:grid-cols-2 lg:grid grid-cols-3 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard