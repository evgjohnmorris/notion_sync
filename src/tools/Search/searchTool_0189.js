/**
 * Generated Tool: searchTool_0189
 * Domain: Search
 * ID: 0189
 */
exports.searchTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0189:', error);
    throw error;
  }
};
