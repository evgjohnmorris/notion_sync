/**
 * Generated Tool: searchTool_0126
 * Domain: Search
 * ID: 0126
 */
exports.searchTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0126:', error);
    throw error;
  }
};
