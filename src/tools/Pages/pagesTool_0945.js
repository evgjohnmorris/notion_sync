/**
 * Generated Tool: pagesTool_0945
 * Domain: Pages
 * ID: 0945
 */
exports.pagesTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0945:', error);
    throw error;
  }
};
