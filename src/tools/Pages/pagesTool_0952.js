/**
 * Generated Tool: pagesTool_0952
 * Domain: Pages
 * ID: 0952
 */
exports.pagesTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0952:', error);
    throw error;
  }
};
