/**
 * Generated Tool: searchTool_0250
 * Domain: Search
 * ID: 0250
 */
exports.searchTool_0250 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0250:', error);
    throw error;
  }
};
