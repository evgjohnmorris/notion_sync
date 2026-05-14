/**
 * Generated Tool: searchTool_0483
 * Domain: Search
 * ID: 0483
 */
exports.searchTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0483:', error);
    throw error;
  }
};
