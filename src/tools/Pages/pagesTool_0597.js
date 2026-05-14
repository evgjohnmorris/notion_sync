/**
 * Generated Tool: pagesTool_0597
 * Domain: Pages
 * ID: 0597
 */
exports.pagesTool_0597 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0597:', error);
    throw error;
  }
};
