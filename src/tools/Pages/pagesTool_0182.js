/**
 * Generated Tool: pagesTool_0182
 * Domain: Pages
 * ID: 0182
 */
exports.pagesTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0182:', error);
    throw error;
  }
};
