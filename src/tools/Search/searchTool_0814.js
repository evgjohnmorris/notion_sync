/**
 * Generated Tool: searchTool_0814
 * Domain: Search
 * ID: 0814
 */
exports.searchTool_0814 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0814:', error);
    throw error;
  }
};
