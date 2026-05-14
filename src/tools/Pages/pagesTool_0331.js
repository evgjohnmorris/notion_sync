/**
 * Generated Tool: pagesTool_0331
 * Domain: Pages
 * ID: 0331
 */
exports.pagesTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0331:', error);
    throw error;
  }
};
