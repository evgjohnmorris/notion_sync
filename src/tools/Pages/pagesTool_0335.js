/**
 * Generated Tool: pagesTool_0335
 * Domain: Pages
 * ID: 0335
 */
exports.pagesTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0335:', error);
    throw error;
  }
};
