/**
 * Generated Tool: searchTool_0014
 * Domain: Search
 * ID: 0014
 */
exports.searchTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0014:', error);
    throw error;
  }
};
