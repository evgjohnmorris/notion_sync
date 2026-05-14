/**
 * Generated Tool: searchTool_0052
 * Domain: Search
 * ID: 0052
 */
exports.searchTool_0052 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0052:', error);
    throw error;
  }
};
