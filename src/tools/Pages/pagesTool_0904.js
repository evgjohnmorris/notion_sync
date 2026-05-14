/**
 * Generated Tool: pagesTool_0904
 * Domain: Pages
 * ID: 0904
 */
exports.pagesTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0904:', error);
    throw error;
  }
};
