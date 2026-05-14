/**
 * Generated Tool: searchTool_0275
 * Domain: Search
 * ID: 0275
 */
exports.searchTool_0275 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0275:', error);
    throw error;
  }
};
