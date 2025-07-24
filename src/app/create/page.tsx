import NavBar from "../_components/navbar";
import CreateShowForm from "./_components/CreateShowForm";



export default function CreateShow() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white bg-gradient-to-b text-black">
      <div className="container flex flex-col items-center justify-between">
        <NavBar className="text-black" />
        {/* Create Show */}

        <div className="w-full max-w-[500px] max-h-screen mb-5 ">
          <CreateShowForm/>
        </div>

        
      </div>
    </main>
  );
}
