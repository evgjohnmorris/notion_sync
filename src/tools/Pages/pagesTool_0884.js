/**
 * Generated Tool: pagesTool_0884
 * Domain: Pages
 * ID: 0884
 */
exports.pagesTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0884:', error);
    throw error;
  }
};
