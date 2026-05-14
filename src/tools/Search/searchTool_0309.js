/**
 * Generated Tool: searchTool_0309
 * Domain: Search
 * ID: 0309
 */
exports.searchTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0309:', error);
    throw error;
  }
};
