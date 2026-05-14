/**
 * Generated Tool: pagesTool_0818
 * Domain: Pages
 * ID: 0818
 */
exports.pagesTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0818:', error);
    throw error;
  }
};
