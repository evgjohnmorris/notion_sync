/**
 * Generated Tool: pagesTool_0886
 * Domain: Pages
 * ID: 0886
 */
exports.pagesTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0886:', error);
    throw error;
  }
};
