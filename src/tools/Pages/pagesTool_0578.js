/**
 * Generated Tool: pagesTool_0578
 * Domain: Pages
 * ID: 0578
 */
exports.pagesTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0578:', error);
    throw error;
  }
};
