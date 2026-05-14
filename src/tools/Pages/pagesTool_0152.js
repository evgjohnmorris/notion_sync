/**
 * Generated Tool: pagesTool_0152
 * Domain: Pages
 * ID: 0152
 */
exports.pagesTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0152:', error);
    throw error;
  }
};
