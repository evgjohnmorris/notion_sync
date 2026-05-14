/**
 * Generated Tool: searchTool_0945
 * Domain: Search
 * ID: 0945
 */
exports.searchTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0945:', error);
    throw error;
  }
};
