/**
 * Generated Tool: pagesTool_0114
 * Domain: Pages
 * ID: 0114
 */
exports.pagesTool_0114 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0114:', error);
    throw error;
  }
};
