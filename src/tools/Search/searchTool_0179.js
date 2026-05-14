/**
 * Generated Tool: searchTool_0179
 * Domain: Search
 * ID: 0179
 */
exports.searchTool_0179 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0179:', error);
    throw error;
  }
};
