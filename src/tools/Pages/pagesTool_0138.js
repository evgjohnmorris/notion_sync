/**
 * Generated Tool: pagesTool_0138
 * Domain: Pages
 * ID: 0138
 */
exports.pagesTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0138:', error);
    throw error;
  }
};
