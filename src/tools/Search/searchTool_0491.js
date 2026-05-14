/**
 * Generated Tool: searchTool_0491
 * Domain: Search
 * ID: 0491
 */
exports.searchTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0491:', error);
    throw error;
  }
};
