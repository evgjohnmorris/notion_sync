/**
 * Generated Tool: pagesTool_0782
 * Domain: Pages
 * ID: 0782
 */
exports.pagesTool_0782 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0782:', error);
    throw error;
  }
};
