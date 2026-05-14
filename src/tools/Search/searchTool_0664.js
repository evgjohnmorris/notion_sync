/**
 * Generated Tool: searchTool_0664
 * Domain: Search
 * ID: 0664
 */
exports.searchTool_0664 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0664:', error);
    throw error;
  }
};
