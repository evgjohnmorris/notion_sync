/**
 * Generated Tool: pagesTool_0486
 * Domain: Pages
 * ID: 0486
 */
exports.pagesTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0486:', error);
    throw error;
  }
};
