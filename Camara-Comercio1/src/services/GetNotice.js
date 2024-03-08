export const getNotice = async () => {
  try {
      const response = await fetch('https://raw.githubusercontent.com/nicoxango994/JSON/main/db.json')
      const data = await response.json();
      return data // Asegúrate de devolver el campo de registro (record) de la respuesta
    
    } catch (error) {
      console.error("Error fetching notices:", error);
      return [];
  }
};