/**
 * Generated Tool: pagesTool_0569
 * Domain: Pages
 * ID: 0569
 */
exports.pagesTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0569:', error);
    throw error;
  }
};
