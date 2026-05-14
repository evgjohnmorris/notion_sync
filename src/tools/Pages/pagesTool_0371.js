/**
 * Generated Tool: pagesTool_0371
 * Domain: Pages
 * ID: 0371
 */
exports.pagesTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0371:', error);
    throw error;
  }
};
