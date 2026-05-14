/**
 * Generated Tool: searchTool_0665
 * Domain: Search
 * ID: 0665
 */
exports.searchTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0665:', error);
    throw error;
  }
};
