/**
 * Generated Tool: pagesTool_0874
 * Domain: Pages
 * ID: 0874
 */
exports.pagesTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0874:', error);
    throw error;
  }
};
