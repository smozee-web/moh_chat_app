// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from "prop-types";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="12eaf740-dd8f-421f-9e91-50268f73c56c"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "12eaf740-dd8f-421f-9e91-50268f73c56c",
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

ChatsPage.propTypes = {
  user: PropTypes.func.isRequired,
};

export default ChatsPage;
