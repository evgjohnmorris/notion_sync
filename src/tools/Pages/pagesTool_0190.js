/**
 * Generated Tool: pagesTool_0190
 * Domain: Pages
 * ID: 0190
 */
exports.pagesTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0190:', error);
    throw error;
  }
};
