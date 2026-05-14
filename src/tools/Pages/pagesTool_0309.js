/**
 * Generated Tool: pagesTool_0309
 * Domain: Pages
 * ID: 0309
 */
exports.pagesTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0309:', error);
    throw error;
  }
};
