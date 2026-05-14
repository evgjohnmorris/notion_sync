/**
 * Generated Tool: pagesTool_0203
 * Domain: Pages
 * ID: 0203
 */
exports.pagesTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0203:', error);
    throw error;
  }
};
