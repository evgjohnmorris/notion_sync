/**
 * Generated Tool: pagesTool_0396
 * Domain: Pages
 * ID: 0396
 */
exports.pagesTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0396:', error);
    throw error;
  }
};
