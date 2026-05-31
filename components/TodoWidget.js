const todos = [
  { text: 'make payroll', done: true },
  { text: 'ship v2', done: true },
  { text: 'finish the essay', done: false },
  { text: 'raise the round', done: false },
  { text: 'call mom', done: false },
  { text: 'get profitable', done: false },
]

export default function TodoWidget() {
  return (
    <div
      className="bg-[#fffde7] dark:bg-[#2a2700] border border-[#e6d000] dark:border-[#5a4f00] shadow-sm px-4 py-3 text-xs font-mono"
      style={{ minWidth: '160px' }}
    >
      <div className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 pb-1 border-b border-[#e6d000] dark:border-[#5a4f00]">
        to do
      </div>
      <ul className="space-y-1">
        {todos.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-[1px] shrink-0 text-[11px] text-gray-500 dark:text-gray-400">
              {item.done ? '[x]' : '[ ]'}
            </span>
            <span
              className={
                item.done
                  ? 'line-through text-gray-400 dark:text-gray-600'
                  : 'text-gray-700 dark:text-gray-300'
              }
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
