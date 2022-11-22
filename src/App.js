import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="h-full bg-[url('../src/assets/wow.jpg')] md:pt-10 md:pb-10 min-h-screen">
      <div className="flex sm:max-w-[90vw] md:mx-auto   md:my-auto   rounded-[2rem] bg-white  ">
        <div className="">
          {/* Navbar */}
          <Navbar />
          {/* Search */}
          <Search />
          {/* Contacts */}
          <Contacts />
        </div>
        {/* Chats */}
        <Chats />
      </div>
    </div>
  );
}

export default App;
