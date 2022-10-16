export async function getDate() {
  const responce = await fetch(
    "https://634c0fbd317dc96a30907dcb.mockapi.io/CARDS"
  );
  if (!responce.ok) {
    alert("Something wrong!");
    return;
  }
  return await responce.json();
}
