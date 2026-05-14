/**
 * Generated Tool: pagesTool_0969
 * Domain: Pages
 * ID: 0969
 */
exports.pagesTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0969:', error);
    throw error;
  }
};
