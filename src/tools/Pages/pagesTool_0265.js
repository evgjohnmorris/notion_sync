/**
 * Generated Tool: pagesTool_0265
 * Domain: Pages
 * ID: 0265
 */
exports.pagesTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0265:', error);
    throw error;
  }
};
