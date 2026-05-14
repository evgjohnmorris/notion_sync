/**
 * Generated Tool: pagesTool_0594
 * Domain: Pages
 * ID: 0594
 */
exports.pagesTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0594:', error);
    throw error;
  }
};
