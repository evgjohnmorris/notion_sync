/**
 * Generated Tool: pagesTool_0603
 * Domain: Pages
 * ID: 0603
 */
exports.pagesTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0603:', error);
    throw error;
  }
};
