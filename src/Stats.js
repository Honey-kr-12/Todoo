export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list
        </em>
      </p>
    )
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100)

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? 'you got everything to go' :
          ` ⛱ you have ${items.length} items in your list, and you packed ${numPacked} items ${percentage}%`
        }
      </em>
    </footer>
  )
}


