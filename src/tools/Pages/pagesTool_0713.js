/**
 * Generated Tool: pagesTool_0713
 * Domain: Pages
 * ID: 0713
 */
exports.pagesTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0713:', error);
    throw error;
  }
};
