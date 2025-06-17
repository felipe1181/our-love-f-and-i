export async function fetchMessage() {
  try { 
    const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000': process.env.NEXT_PUBLIC_BASE_URL
    const response = await fetch(`${baseURL}/api/messages`, {
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