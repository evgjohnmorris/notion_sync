/**
 * Generated Tool: searchTool_0152
 * Domain: Search
 * ID: 0152
 */
exports.searchTool_0152 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0152:', error);
    throw error;
  }
};
