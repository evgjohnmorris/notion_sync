/**
 * Generated Tool: pagesTool_0086
 * Domain: Pages
 * ID: 0086
 */
exports.pagesTool_0086 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0086:', error);
    throw error;
  }
};
