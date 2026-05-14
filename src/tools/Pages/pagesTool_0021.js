/**
 * Generated Tool: pagesTool_0021
 * Domain: Pages
 * ID: 0021
 */
exports.pagesTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0021:', error);
    throw error;
  }
};
