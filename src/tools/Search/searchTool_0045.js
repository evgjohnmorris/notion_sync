/**
 * Generated Tool: searchTool_0045
 * Domain: Search
 * ID: 0045
 */
exports.searchTool_0045 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0045:', error);
    throw error;
  }
};
