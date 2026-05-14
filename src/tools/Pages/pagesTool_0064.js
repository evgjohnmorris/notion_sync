/**
 * Generated Tool: pagesTool_0064
 * Domain: Pages
 * ID: 0064
 */
exports.pagesTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0064:', error);
    throw error;
  }
};
