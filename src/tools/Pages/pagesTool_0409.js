/**
 * Generated Tool: pagesTool_0409
 * Domain: Pages
 * ID: 0409
 */
exports.pagesTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0409:', error);
    throw error;
  }
};
