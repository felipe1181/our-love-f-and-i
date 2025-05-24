export const fetchMessage = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/messages`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching message:", error);
  }
};
