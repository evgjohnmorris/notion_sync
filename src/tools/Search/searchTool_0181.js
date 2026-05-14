/**
 * Generated Tool: searchTool_0181
 * Domain: Search
 * ID: 0181
 */
exports.searchTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0181:', error);
    throw error;
  }
};
