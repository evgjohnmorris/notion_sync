/**
 * Generated Tool: pagesTool_0402
 * Domain: Pages
 * ID: 0402
 */
exports.pagesTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0402:', error);
    throw error;
  }
};
