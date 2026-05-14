/**
 * Generated Tool: pagesTool_0737
 * Domain: Pages
 * ID: 0737
 */
exports.pagesTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0737:', error);
    throw error;
  }
};
