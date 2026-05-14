/**
 * Generated Tool: pagesTool_0142
 * Domain: Pages
 * ID: 0142
 */
exports.pagesTool_0142 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0142:', error);
    throw error;
  }
};
