import { PropsWithChildren } from "react";

const ChatLayout = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-4xl h-ull w-full">{children}</div>;
};

export default ChatLayout;
