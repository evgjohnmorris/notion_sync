/**
 * Generated Tool: pagesTool_0825
 * Domain: Pages
 * ID: 0825
 */
exports.pagesTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0825:', error);
    throw error;
  }
};
