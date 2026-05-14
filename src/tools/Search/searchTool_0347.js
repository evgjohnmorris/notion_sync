/**
 * Generated Tool: searchTool_0347
 * Domain: Search
 * ID: 0347
 */
exports.searchTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0347:', error);
    throw error;
  }
};
