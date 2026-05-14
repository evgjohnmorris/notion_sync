/**
 * Generated Tool: searchTool_0205
 * Domain: Search
 * ID: 0205
 */
exports.searchTool_0205 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0205:', error);
    throw error;
  }
};
