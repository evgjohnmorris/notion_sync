/**
 * Generated Tool: searchTool_0751
 * Domain: Search
 * ID: 0751
 */
exports.searchTool_0751 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0751:', error);
    throw error;
  }
};
