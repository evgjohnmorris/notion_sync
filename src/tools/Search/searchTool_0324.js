/**
 * Generated Tool: searchTool_0324
 * Domain: Search
 * ID: 0324
 */
exports.searchTool_0324 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0324:', error);
    throw error;
  }
};
