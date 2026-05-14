/**
 * Generated Tool: searchTool_0401
 * Domain: Search
 * ID: 0401
 */
exports.searchTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0401:', error);
    throw error;
  }
};
