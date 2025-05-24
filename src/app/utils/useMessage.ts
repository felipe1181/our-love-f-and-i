export async function fetchMessage() {
  try { 
    const response = await fetch("/api/messages", {
      cache: 'no-store'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching message:', error);
    return {
      message: "Erro ao carregar mensagem",
      daysUntilMeeting: 0
    };
  }
} 