import EditTopicForm from "@/components/EditTopicForm";

const getTopics = async (id) => {
  try {
    const res = await fetch(`/api/topics/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }

    return res.json();

  } catch (error) {
    console.log("something wrong with loading:", error)
    return { topic: [] }
  }

};


export default async function editTopic({ params }) {
  // resiving id in the url ,so pasing it to the editTopicForm
  const { id } = params;
  const { topic } = await getTopics(id);
  const { title, description } = topic;
  return (

    <EditTopicForm id={id} title={title} description={description} />

  );
}