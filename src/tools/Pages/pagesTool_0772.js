/**
 * Generated Tool: pagesTool_0772
 * Domain: Pages
 * ID: 0772
 */
exports.pagesTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0772:', error);
    throw error;
  }
};
