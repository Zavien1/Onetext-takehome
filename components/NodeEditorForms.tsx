import { ActionSelect } from "./ActionSelect";

export const ResponseNodeForm = ({ nodeId, message, setMessage }: any) => {
  return (
    <>
      <div>
        <h1 className="text-[1.15rem] font-bold">Edit Response Nodes</h1>
        <p>Response nodes are response messages sent from the user...</p>
      </div>
      <textarea
        key={`node-${nodeId}`}
        placeholder="Example: 'Yes' or leave blank if there is not a specific expected response"
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg p-2 w-full bg-[#F2F2F2]"
        value={message}
      />
    </>
  );
};

export const InitialMessageNodeForm = ({
  nodeId,
  message,
  setMessage,
}: any) => {
  return (
    <>
      <div>
        <h1 className="text-[1.15rem] font-bold">Edit Initial Message Node</h1>
        <p>The initial message users receive to begin your text flow.</p>
      </div>
      <textarea
        key={`node-${nodeId}`}
        placeholder="Enter message here"
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg p-2 w-full bg-[#F2F2F2]"
        defaultValue={message}
      />
    </>
  );
};

export const EndNodeForm = ({}: any) => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-4">
      <h1 className="text-[2rem] font-bold text-center">
        No Editing Available for End Node
      </h1>
      <p>End Nodes mark the end of your flow...</p>
    </div>
  );
};

export const IntentNodeForm = ({ nodeId, message, setMessage }: any) => {
  return (
    <>
      <div>
        <h1 className="text-[1.15rem] font-bold">Edit Intent Node</h1>
        <p>
          Intent nodes are designed to identify the purpose behind a user's
          response to a specific message...
        </p>
      </div>
      <textarea
        key={`node-${nodeId}`}
        placeholder="Example: User wants to know the weather"
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg p-2 w-full bg-[#F2F2F2]"
        defaultValue={message}
      />
    </>
  );
};

export const MessageNodeForm = ({ nodeId, message, setMessage }: any) => {
  return (
    <>
      <div>
        <h1 className="text-[1.15rem] font-bold">Edit Message Node</h1>
        <p>Basic Message nodes are used to deliver a response to the user.</p>
      </div>
      <textarea
        key={`node-${nodeId}`}
        placeholder="Enter message here"
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg p-2 w-full bg-[#F2F2F2]"
        defaultValue={message}
      />
    </>
  );
};

export const ActionNodeForm = ({ nodeId, message, setMessage }: any) => {
  return (
    <>
      <div>
        <h1 className="text-[1.15rem] font-bold">Edit Action Node</h1>
        <p>
          Action nodes can be used to take action to user responses in the
          backend...
        </p>
      </div>
      <ActionSelect />
    </>
  );
};
