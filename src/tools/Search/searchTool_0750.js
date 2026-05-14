/**
 * Generated Tool: searchTool_0750
 * Domain: Search
 * ID: 0750
 */
exports.searchTool_0750 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0750:', error);
    throw error;
  }
};
