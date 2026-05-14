/**
 * Generated Tool: pagesTool_0960
 * Domain: Pages
 * ID: 0960
 */
exports.pagesTool_0960 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0960:', error);
    throw error;
  }
};
