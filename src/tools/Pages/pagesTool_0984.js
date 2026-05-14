/**
 * Generated Tool: pagesTool_0984
 * Domain: Pages
 * ID: 0984
 */
exports.pagesTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0984:', error);
    throw error;
  }
};
