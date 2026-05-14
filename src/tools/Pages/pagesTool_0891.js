/**
 * Generated Tool: pagesTool_0891
 * Domain: Pages
 * ID: 0891
 */
exports.pagesTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0891:', error);
    throw error;
  }
};
