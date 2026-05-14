/**
 * Generated Tool: searchTool_0502
 * Domain: Search
 * ID: 0502
 */
exports.searchTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0502:', error);
    throw error;
  }
};
