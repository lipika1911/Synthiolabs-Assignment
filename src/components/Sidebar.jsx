import { SquarePen } from "lucide-react";
import { chats } from "../data/chats";

const Sidebar = ({activeId}) => {
  return (
    <div className="flex h-full flex-col px-4 py-2">
      <div className="flex items-center justify-between px-2 pt-2 pb-4">
        <h2 className="text-xl font-semibold">Chats</h2>
        <SquarePen className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Chat List */}
      <ul className="mt-2 flex-1 space-y-1 overflow-y-auto pr-1">
        {chats.map((c) => (
          <li key={c.id}>
            <button
              className={`flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-blue-100 ${
                activeId === c.id ? "bg-primary/5 ring-1 ring-primary/20" : ""
              }`}
            >
              <img
                src={c.avatar}
                alt={c.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="min-w-0">
                <div className="truncate text-md font-medium">{c.name}</div>
                <div className="truncate text-sm text-muted-foreground">
                  {c.lastMessage}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
