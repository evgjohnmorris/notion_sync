/**
 * Generated Tool: searchTool_0053
 * Domain: Search
 * ID: 0053
 */
exports.searchTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0053:', error);
    throw error;
  }
};
