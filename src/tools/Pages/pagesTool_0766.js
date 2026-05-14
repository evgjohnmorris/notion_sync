/**
 * Generated Tool: pagesTool_0766
 * Domain: Pages
 * ID: 0766
 */
exports.pagesTool_0766 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0766:', error);
    throw error;
  }
};
