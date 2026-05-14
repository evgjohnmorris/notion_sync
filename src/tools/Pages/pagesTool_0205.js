/**
 * Generated Tool: pagesTool_0205
 * Domain: Pages
 * ID: 0205
 */
exports.pagesTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0205:', error);
    throw error;
  }
};
