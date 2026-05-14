/**
 * Generated Tool: pagesTool_0491
 * Domain: Pages
 * ID: 0491
 */
exports.pagesTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0491:', error);
    throw error;
  }
};
