const BinLinks = ({ bins }) => {
  return (
    <ul className="p-0">
      {bins.map(bin => (
        <li className="card mb-2 p-2" key={bin.id}>
          {bin.binUrl}
        </li>
      ))}
    </ul>
  )
}

export default BinLinks;