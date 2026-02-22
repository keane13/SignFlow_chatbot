const API_URL = '/api';

export const askHelpdesk = async (prompt: string) => {
  try {
    const response = await fetch(`${API_URL}/helpdesk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data.text || "No response";
  } catch (error) {
    console.error("Helpdesk Error:", error);
    return "**Gagal Terhubung ke Server.**";
  }
};

export const assistantTask = async (task: string, context: string) => {
  try {
    const response = await fetch(`${API_URL}/assistant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, context }),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return {
      text: data.text || "",
      functionCalls: data.functionCalls || []
    };
  } catch (error) {
    console.error("Assistant Task Error:", error);
    throw error;
  }
};
