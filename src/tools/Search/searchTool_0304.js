/**
 * Generated Tool: searchTool_0304
 * Domain: Search
 * ID: 0304
 */
exports.searchTool_0304 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0304:', error);
    throw error;
  }
};
