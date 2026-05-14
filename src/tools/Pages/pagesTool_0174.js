/**
 * Generated Tool: pagesTool_0174
 * Domain: Pages
 * ID: 0174
 */
exports.pagesTool_0174 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0174:', error);
    throw error;
  }
};
