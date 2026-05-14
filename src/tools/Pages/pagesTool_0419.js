/**
 * Generated Tool: pagesTool_0419
 * Domain: Pages
 * ID: 0419
 */
exports.pagesTool_0419 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0419:', error);
    throw error;
  }
};
