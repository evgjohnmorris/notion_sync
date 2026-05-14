/**
 * Generated Tool: searchTool_0937
 * Domain: Search
 * ID: 0937
 */
exports.searchTool_0937 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0937:', error);
    throw error;
  }
};
