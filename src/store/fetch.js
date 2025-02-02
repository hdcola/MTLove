export async function fetchDb(sid) {
  const response = await fetch(
    `https://mtloveapi.huangdong.workers.dev/api/scenarios/${sid}`
  );
  const data = await response.json();
  console.log(data);

  if (!data || data.length === 0) {
    throw new Error("No data found");
  }

  const { id, title, description, system, start } = data;
  console.log(
    `id: ${id} \n title: ${title} \n  description: ${description} \n system: ${system} \n start: ${start}`
  );

  return { id, title, description, system, start };
}
