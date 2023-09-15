import axios from axios;

export async function getCurrentUser(){
  try {
    const response = await axios.get("/api/users/currentuser");
  } catch (error) {
    
  }
}





export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("Home")
  return (
    <main>
        <h1>Homepage</h1>
    </main>
  )
}
