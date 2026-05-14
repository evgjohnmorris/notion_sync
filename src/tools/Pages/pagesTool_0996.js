/**
 * Generated Tool: pagesTool_0996
 * Domain: Pages
 * ID: 0996
 */
exports.pagesTool_0996 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0996:', error);
    throw error;
  }
};
